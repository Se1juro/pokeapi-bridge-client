import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, mergeMap, map, first, take, tap } from 'rxjs/operators';
import { checkLogged } from '../state/actions/auth.actions';
import { AppState } from '../state/app.state';
import { selectLogged, selectUser } from '../state/selectors/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardGuard implements CanActivate {
  checkLogged$ = this.store.pipe(select(selectLogged));
  userLogged$ = this.store.pipe(select(selectUser));
  constructor(private router: Router, private store: Store<AppState>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!localStorage.getItem('token')) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return this.checkLogged$.pipe(
      tap((logged) => {
        if (!logged) this.store.dispatch(checkLogged());
      }),
      filter((logged) => !!logged),
      map((logged) => {
        if (!logged) {
          localStorage.removeItem('token');

          this.router.navigateByUrl('/login');
          return false;
        }

        return true;
      }),
      first()
    );
  }
}
