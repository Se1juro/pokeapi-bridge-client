import { createSelector } from '@ngrx/store';
import { IAuthState } from 'src/app/modules/auth/interfaces/auth.state';
import { AppState } from '../app.state';

export const selectAuth = (state: AppState) => state.auth;

export const selectToken = createSelector(selectAuth, (state: IAuthState) => {
  return state.token;
});

export const selectUser = createSelector(selectAuth, (state: IAuthState) => {
  return state.user;
});

export const selectLoading = createSelector(selectAuth, (state: IAuthState) => {
  return state.loading;
});

export const selectLogged = createSelector(selectAuth, (state: IAuthState) => {
  return state.logged;
});
