import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtAuthenticationResponse } from './auth/model/jwt-authentication-response';
import { LoginRequest } from './auth/model/login-request';
import { SignUpRequest } from './auth/model/sign-up-request';

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
      .post<any>(environment.usersLink + 'signin', loginRequest)
      .pipe(
        tap(
          (jwtAuthenticationResponse) =>
            (this.jwtAuthenticationResponse = jwtAuthenticationResponse)
        ),
        map(response => true)
      );
  }

  getAuthorizationHeaderValue(): string {
    return `${this.jwtAuthenticationResponse?.tokenType} ${this.jwtAuthenticationResponse?.accessToken}`;
  }
}
