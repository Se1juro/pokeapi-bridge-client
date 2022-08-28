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
import { AppState } from '../state/app.state';
import { filter, mergeMap, map, first, take, tap } from 'rxjs/operators';

import { selectLogged, selectUser } from '../state/selectors/auth.selector';
import { checkLogged } from '../state/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class LoggedGuard implements CanActivate {
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
    if (!localStorage.getItem('token')) return true;
    return this.checkLogged$.pipe(
      tap((logged) => {
        if (!logged) this.store.dispatch(checkLogged());
      }),
      filter((logged) => !!logged),
      map((logged) => {
        if (logged) {
          this.router.navigateByUrl('/');
          return false;
        }

        return true;
      }),
      first()
    );
  }
}
