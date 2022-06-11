import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  userlist: any;
  constructor(
    private userService: SharedService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'
        ),
      ]),
    });

    const response = this.userService.getUserData().subscribe((data) => {
      this.userlist = data;
    });
  }

  get e() {
    return this.loginForm.get('email');
  }
  get p() {
    return this.loginForm.get('password');
  }
  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['userProfile']);
    }
  }
  loginUser() {
    let flag = false;
    let index = 0;
    for (let i = 0; i < this.userlist.length; i++) {
      if (
        this.loginForm.value.email == this.userlist[i].email &&
        this.loginForm.value.password == this.userlist[i].password
      ) {
        flag = true;
        index = i;
        break;
      }
    }

    if (flag) {
      this.authService.login(flag).subscribe(
        (result) => {
          this.router.navigate(['userProfile', this.userlist[index].id]);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    } else {
      alert('Incorrect Email or Password');
    }
    this.loginForm.reset;
  }
}
