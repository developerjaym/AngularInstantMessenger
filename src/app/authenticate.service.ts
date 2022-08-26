import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuthenticationResponse } from './auth/model/jwt-authentication-response';
import { LoginRequest } from './auth/model/login-request';
import { SignUpRequest } from './auth/model/sign-up-request';
import { UserDTO } from './messaging/model/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  jwtAuthenticationResponse?: JwtAuthenticationResponse;

  constructor(private httpClient: HttpClient) {}

  signup(signupRequest: SignUpRequest): Observable<boolean> {
    return this.httpClient
      .post<any>(environment.usersLink, signupRequest)
      .pipe(map((response) => true));
  }

  signin(loginRequest: LoginRequest): Observable<boolean> {
    // 1
    return this.httpClient
      .post<JwtAuthenticationResponse>(environment.usersLink + 'signin', loginRequest)
      .pipe(
        tap(
          (jwtAuthenticationResponse) =>
            (this.jwtAuthenticationResponse = jwtAuthenticationResponse)
        ),
        map(response => true),
        catchError(e => of(false))
      );
  }

  getUsers():Observable<UserDTO[]>{
    return this.httpClient.get<UserDTO[]>(environment.usersLink)
  }

  getAuthorizationHeaderValue(): string {
    return `${this.jwtAuthenticationResponse?.tokenType} ${this.jwtAuthenticationResponse?.accessToken}`;
  }
}
