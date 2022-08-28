import { createReducer, on } from '@ngrx/store';
import { IAuthState } from 'src/app/modules/auth/interfaces/auth.state';
import { login, userLogged } from '../actions/auth.actions';

export const initialState: IAuthState = {
  loading: false,
  user: undefined,
  token: undefined,
};

export const authReducer = createReducer(
  initialState,
  on(login, (state) => {
    return { ...state, loading: true };
  }),
  on(userLogged, (state, { user, token, loading }) => {
    return { ...state, user, token, loading };
  })
);
