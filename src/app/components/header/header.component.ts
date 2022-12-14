import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { userChecked } from 'src/app/state/actions/auth.actions';
import { AppState } from 'src/app/state/app.state';
import { selectLogged } from 'src/app/state/selectors/auth.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logged$: boolean = false;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store.select(selectLogged).subscribe((res) => (this.logged$ = res));
  }

  logOut() {
    localStorage.removeItem('token');
    this.store.dispatch(
      userChecked({ user: undefined, logged: false, token: '' })
    );
    this.router.navigateByUrl('/login');
  }
}
