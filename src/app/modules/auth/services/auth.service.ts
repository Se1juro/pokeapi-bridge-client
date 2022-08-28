import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectToken } from 'src/app/state/selectors/auth.selector';
import { IUser } from '../interfaces/auth.state';
import { IBodyLogin } from '../interfaces/bodyLogin.interface';
import { IResponseLogin } from '../interfaces/responseLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token$: string | undefined = undefined;
  private API_URL = 'http://localhost:3033/pokeapi/api/auth';
  constructor(private store: Store<AppState>, private http: HttpClient) {}

  login(bodyLogin: IBodyLogin): Observable<IResponseLogin> {
    return this.http.post<IResponseLogin>(`${this.API_URL}/sigin`, bodyLogin);
  }

  authCheck(): Observable<IUser> {
    const token = this.token$ ? this.token$ : localStorage.getItem('token');
    this.store.select(selectToken).subscribe((res) => (this.token$ = res));
    return this.http.post<IUser>(`${this.API_URL}/check`, { token });
  }
}
