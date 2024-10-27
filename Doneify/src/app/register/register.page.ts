import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private auth: AngularFireAuth, private router: Router) {}

  /**
   * Registers a new user with Firebase Authentication
   */
  async register() {
    try {
      await this.auth.createUserWithEmailAndPassword(this.email, this.password);
      alert('Registration successful!');
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  }

  /**
   * Navigates to the login page
   */
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
