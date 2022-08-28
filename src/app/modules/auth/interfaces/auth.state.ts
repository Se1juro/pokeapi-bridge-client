export interface IAuthState {
  loading: boolean;
  user: IUser | undefined;
  token: string | undefined;
}

export interface IUser {
  name: string;
  nickName: string;
  id: string;
  team: 'yellow' | 'red' | 'blue';
  lastConnection: Date;
  iat: number;
  exp: number;
}
