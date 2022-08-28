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
  props<{ user: IUser; token: string; loading: boolean }>()
);
