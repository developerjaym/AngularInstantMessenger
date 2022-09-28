import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() {
    // localhost:4200chat/1
    let formValue = this.loginForm.value;
    this.loginForm.reset();
    this.authService.signin(formValue).subscribe((goodCredentials) => {
      if (goodCredentials) {
        this.router.navigate(['conversations']);
        return;
      } else {
        alert("Username or password incorrect")
      }
      console.log('did i have good credentials ', goodCredentials);
    });
  }
}
