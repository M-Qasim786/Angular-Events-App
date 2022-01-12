import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'events-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  saveLoginForm() {
    this.http.get<any>('http://localhost:3000/signupuser').subscribe({
      next: (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.toastr.success('login success', 'login');
          this.loginForm.reset();
          this.router.navigate(['/events-list']);
        } else {
          this.toastr.error('user not found', 'error');
        }
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('server side error');
      },
    });
  }
  emailValidate() {
    return (
      this.loginForm.get('email')?.valid ||
      this.loginForm.get('email')?.pristine
    );
  }
  passwordValidate() {
    return (
      this.loginForm.get('password')?.valid ||
      this.loginForm.get('password')?.pristine
    );
  }

  toSignup() {
    this.router.navigate(['/signup']);
  }
}
