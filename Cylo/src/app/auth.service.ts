import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() != null;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login(flag: boolean) {
    if (flag) {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Sujata Das', email: 'sujatadas603@gmail.com' });
    }
    return throwError(new Error('Failed to Login'));
  }
}
