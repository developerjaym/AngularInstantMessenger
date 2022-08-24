import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private authService: AuthenticateService, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', Validators.required],
        password: ['', Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  login() {
    // 1
    let formValue = this.loginForm.value;
    this.loginForm.reset();
    this.authService.signin(formValue).subscribe(
      (result) => {}
    );
  }
}
