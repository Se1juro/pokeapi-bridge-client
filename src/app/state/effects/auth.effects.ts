import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, mergeMap } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { PokemonService } from 'src/app/modules/pokemons/services/pokemon.service';
import { AUTH_ACTIONS_TYPES } from '../actionsTypes/auth.actionTypes';
import { POKEMONS_ACTIONS_TYPES } from '../actionsTypes/pokemons.actionTypes';
import { AppState } from '../app.state';

@Injectable()
export class AuthEffects {
  userLogin$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AUTH_ACTIONS_TYPES.LOGIN),
      switchMap(({ nickName, password }) =>
        this.authService.login({ nickName, password }).pipe(
          map((response) => ({
            type: AUTH_ACTIONS_TYPES.USER_LOGGED,
            token: response.token,
          })),
          catchError(() => EMPTY)
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
