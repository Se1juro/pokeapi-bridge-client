export interface IAuthState {
  loading: boolean;
  user: IUser | undefined;
  token: string | undefined;
  logged: boolean;
}

export interface IUser {
  user: {
    name: string;
    nickName: string;
    id: string;
    team: 'yellow' | 'red' | 'blue';
    lastConnection: Date;
    iat: number;
    exp: number;
  };
  logged: boolean;
}
