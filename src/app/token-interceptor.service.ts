import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  export class TokenInterceptorService implements HttpInterceptor{
    // configured, should intercept EVERY http call
    // and keep track of tokens which are needed by other services!
    
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiZXhwIjoxNjYxODcyOTA2LCJpYXQiOjE2NjEyNjgxMDZ9.GHRqlp6IGbPO0guQgFW4b0rjm8F2NnO7HL2IQG2PGDyd-6Zl775RQRcqZMYghMyQIv07RD8U_uHX83ZIRXZdPQ`,
      },
    });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && (error.status === 401 || error.status === 403)) {
          console.log("OH NO!");
          // Why not redirect them to the log in page!
          // or refresh / re-log them in some how/
        }
        return throwError(error);
      })
    );
  }
  // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   throw new Error('Method not implemented.');
  // }
}
