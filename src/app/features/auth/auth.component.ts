import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Data, Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [MatCardModule, ReactiveFormsModule, FormsModule, MatFormFieldModule,
    MatLabel, MatCheckboxModule, MatInputModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  authForm!: FormGroup;
  isRegistering: boolean = false;
  isFormSubmitted: boolean = false;
  hide: boolean = true;

  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private route: ActivatedRoute) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data: Data) => {
        this.isRegistering = data['mode'] === 'register';
        this.initializeForm();
      },
      error: (err: Data) => {
        console.error('Error fetching route data', err);
      }
    });
  }

  initializeForm(): void {
    this.authForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['']
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(formGroup: AbstractControl): ValidationErrors | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    this.isFormSubmitted = true;
    if (this.authForm.valid) {
      if (this.isRegistering) {
        console.log('Registration');
      } else {
        console.log('Login');
      }
    }
  }

  toggleForm(): void {
    const targetRoute = this.isRegistering ? '/login' : '/register';
    this.router.navigate([targetRoute]);
  }

  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
