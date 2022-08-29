import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/modules/auth/interfaces/auth.state';
import { IBodyLogin } from 'src/app/modules/auth/interfaces/bodyLogin.interface';
import { AUTH_ACTIONS_TYPES } from '../actionsTypes/auth.actionTypes';

export const login = createAction(
  AUTH_ACTIONS_TYPES.LOGIN,
  props<{ nickName: string; password: string }>()
);

export const userLogged = createAction(
  AUTH_ACTIONS_TYPES.USER_LOGGED,
  props<{ user: IUser; token: string; loading: boolean; logged: boolean }>()
);

export const checkLogged = createAction(AUTH_ACTIONS_TYPES.CHECK_LOGGED);

export const userChecked = createAction(
  AUTH_ACTIONS_TYPES.USER_CHECKED,
  props<{ user: IUser; logged: boolean; token: string }>()
);

export const setLoginError = createAction(
  AUTH_ACTIONS_TYPES.SET_LOGIN_ERROR,
  props<{
    user: IUser | undefined;
    token: string | undefined;
    logged: boolean;
  }>()
);

export const signUp = createAction(
  AUTH_ACTIONS_TYPES.SIGN_UP,
  props<{ nickName: string; password: string; name: string; team: string }>()
);
