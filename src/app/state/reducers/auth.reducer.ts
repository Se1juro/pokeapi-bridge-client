import { createReducer, on } from '@ngrx/store';
import { IAuthState } from 'src/app/modules/auth/interfaces/auth.state';
import {
  checkLogged,
  login,
  userChecked,
  userLogged,
} from '../actions/auth.actions';

export const initialState: IAuthState = {
  loading: false,
  user: undefined,
  token: undefined,
  logged: false,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => {
    return { ...state, loading: true };
  }),
  on(userLogged, (state, { user, token, loading, logged }) => {
    localStorage.setItem('token', token);
    return { ...state, user, token, loading, logged };
  }),
  on(checkLogged, (state) => {
    return { ...state, loading: true, logged: false };
  }),
  on(userChecked, (state, { logged, user }) => {
    return { ...state, loading: false, logged, user };
  })
);
