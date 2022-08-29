export interface IResponseLogin {
  token: string;
}

export interface IResponseRegistry {
  user: IAccount;
  token: string;
}

export interface IAccount {
  name: string;
  nickName: string;
  id: string;
  team: 'yellow' | 'red' | 'blue';
  lastConnection: Date;
  iat: number;
  exp: number;
}
