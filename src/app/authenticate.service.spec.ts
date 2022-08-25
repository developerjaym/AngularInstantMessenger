import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { defer, Observable, of } from 'rxjs';

import { AuthenticateService } from './authenticate.service';
export function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}

fdescribe('AuthenticateService', () => {
  let service: AuthenticateService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    service = new AuthenticateService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sign up succeeds', (done: DoneFn) => {
    httpClientSpy.post.and.returnValue(of({}));

    service
      .signup({
        username: "jay",
        password: "123"
      })
      .subscribe({
        next: (response) => {
          expect(response).withContext('expected response').toEqual(true);
          done();
        },
        error: done.fail,
      });
    expect(httpClientSpy.post.calls.count()).withContext('one call').toBe(1);
  });

  it('sign up fails', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });

    httpClientSpy.post.and.returnValue(asyncError(errorResponse));

    service.signup({
      username: "jay",
      password: "123"
    }).subscribe({
      next: response => done.fail('expected an error, not heroes'),
      error: error  => {
        expect(true).toBe(true);
        done();
      }

  });
});
  // sign up POST succeeds
  // sign up POST fails
});
