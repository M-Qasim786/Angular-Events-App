import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  saveSignupForm() {
    if (this.signupForm.valid) {
      this.http
        .post<any>('http://localhost:3000/signupuser', this.signupForm.value)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.toastr.success('signup suuccess!!');
            this.router.navigate(['/login']);
            this.signupForm.reset();
          },
          error: (err) => {
            console.log(err);
            this.toastr.error('something went wrong');
          },
        });
    } else {
      alert('form are not valid please fill the required field');
    }
  }

  firstNameValidate() {
    return (
      this.signupForm.get('firstName')?.valid ||
      this.signupForm.get('firstName')?.pristine
    );
  }
  lastNameValidate() {
    return (
      this.signupForm.get('lastName')?.valid ||
      this.signupForm.get('lastName')?.pristine
    );
  }

  emailValidate() {
    return (
      this.signupForm.get('email')?.valid ||
      this.signupForm.get('email')?.pristine
    );
  }
  passwordValidate() {
    return (
      this.signupForm.get('password')?.valid ||
      this.signupForm.get('password')?.pristine
    );
  }

  backLogin() {
    this.router.navigate(['/login']);
  }
}
