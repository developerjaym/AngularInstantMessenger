import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      username: ['', [Validators.minLength(3), Validators.maxLength(32)]],
      password: ['', [Validators.minLength(6), Validators.maxLength(32)]],
    });
  }

  showErrorMessage = false;

  ngOnInit(): void {}

  signup() {
    let formValue = this.signUpForm.value;
    this.signUpForm.reset();
    this.authService.signup(formValue).subscribe({
      next: (data) => {
        this.showErrorMessage = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.showErrorMessage = true;
      },
    });
  }
}
