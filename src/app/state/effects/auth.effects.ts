import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { getDecodedAccessToken } from 'src/app/utils/auth/decodeToken.util';
import { setLoginError } from '../actions/auth.actions';
import { AUTH_ACTIONS_TYPES } from '../actionsTypes/auth.actionTypes';
import { AppState } from '../app.state';

@Injectable()
export class AuthEffects {
  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS_TYPES.LOGIN),
      switchMap(({ nickName, password }) =>
        this.authService.login({ nickName, password }).pipe(
          map((response) => {
            localStorage.setItem('token', response.token);
            return {
              type: AUTH_ACTIONS_TYPES.USER_LOGGED,
              token: response.token,
              loading: false,
              user: getDecodedAccessToken(response.token),
              logged: true,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  checkLogged$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS_TYPES.CHECK_LOGGED),
      switchMap(() =>
        this.authService.authCheck().pipe(
          map((response) => {
            return {
              type: AUTH_ACTIONS_TYPES.USER_CHECKED,
              user: response.user,
              logged: response.logged,
            };
          }),
          catchError(() => {
            this.store.dispatch(
              setLoginError({
                logged: false,
                token: undefined,
                user: undefined,
              })
            );
            localStorage.removeItem('token');
            return of();
          })
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS_TYPES.SIGN_UP),
      switchMap(({ name, nickName, password, team }) =>
        this.authService.signUp({ name, nickName, password, team }).pipe(
          map((response) => {
            console.log(
              '🚀 ~ file: auth.effects.ts ~ line 89 ~ AuthEffects ~ map ~ response',
              response
            );

            return {
              type: AUTH_ACTIONS_TYPES.USER_CHECKED,
              user: response.user,
              token: response.token,
              logged: true,
            };
          }),
          catchError(() => {
            this.store.dispatch(
              setLoginError({
                logged: false,
                token: undefined,
                user: undefined,
              })
            );
            localStorage.removeItem('token');

            return of();
          })
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}
}
