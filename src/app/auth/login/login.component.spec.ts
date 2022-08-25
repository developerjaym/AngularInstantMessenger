import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthenticateService } from 'src/app/authenticate.service';
import { LoginRequest } from '../model/login-request';

import { LoginComponent } from './login.component';

class MockAuthenticateService {
  signin(loginRequest: LoginRequest): Observable<boolean> {
    return of(true);
  }
}
class MockRouter {
  navigate(arr: any[]): Promise<boolean> {
    return new Promise(() => true);
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let formBuilder: FormBuilder;
  let authService: AuthenticateService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [FormBuilder,
      { provide: AuthenticateService, useClass: MockAuthenticateService },
      { provide: Router, useClass: MockRouter }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('logs in successfully', () => {
    // arrange/set up
     // it will be the instance of MockRouter that really got injected into our component
     router = TestBed.inject(Router);
     spyOn(router, 'navigate').and.callThrough();

    // act
    component.login();

    // assert
    expect(router.navigate).toHaveBeenCalledWith(["chat", "1"]);
  })

  it('logs in unsuccessfully', () => {
    // arrange/set up
     // it will be the instance of MockRouter that really got injected into our component
     router = TestBed.inject(Router);
     spyOn(router, 'navigate').and.callThrough();

     authService = TestBed.inject(AuthenticateService);
     spyOn(authService, 'signin').and.returnValue(of(false));

    // act
    component.login();

    // assert
    expect(router.navigate).toHaveBeenCalledTimes(0);
  })
});
