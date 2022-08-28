import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBodyLogin } from '../interfaces/bodyLogin.interface';
import { IResponseLogin } from '../interfaces/responseLogin.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'http://localhost:3033/pokeapi/api/auth';
  constructor(private http: HttpClient) {}

  login(bodyLogin: IBodyLogin): Observable<IResponseLogin> {
    console.log(
      '🚀 ~ file: auth.service.ts ~ line 15 ~ AuthService ~ login ~ bodyLogin',
      bodyLogin
    );
    return this.http.post<IResponseLogin>(`${this.API_URL}/sigin`, bodyLogin);
  }
}
