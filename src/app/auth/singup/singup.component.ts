import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/authenticate.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css'],
})
export class SingupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private router: Router
  ) {
    this.signUpForm = this.formBuilder.group({
      username: ['', Validators.minLength(3)],
      password: ['', Validators.minLength(3)],
    });
  }

  error?: string;

  ngOnInit(): void {}

  signup() {
    if (this.signUpForm.invalid) {
      return;
    }

    let formValue = this.signUpForm.value;
    this.signUpForm.reset();
    this.authService.signup(formValue).subscribe({
      next: (data) => {
        this.router.navigate(['/login']);
        alert('Sign Up is successful!');
      },
      error: (err) => {
        this.error = err;
        alert(this.error);
      },
    });
  }
}
