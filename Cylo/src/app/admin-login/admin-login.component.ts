import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  adminList: any;
  constructor(
    private userService: SharedService,
    private router: Router,
    private authService: AuthService
  ) {
    this.adminLoginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,15}'
        ),
      ]),
    });
    const response = this.userService.getAdminData().subscribe((data) => {
      this.adminList = data;
    });
  }
  get e() {
    return this.adminLoginForm.get('username');
  }
  get p() {
    return this.adminLoginForm.get('password');
  }
  ngOnInit(): void {}
  addAdmin() {
    console.log(this.adminLoginForm.value);
    let flag = false;
    let index = 0;
    for (let i = 0; i < this.adminList.length; i++) {
      if (
        this.adminLoginForm.value.username == this.adminList[i].username &&
        this.adminLoginForm.value.password == this.adminList[i].password
      ) {
        flag = true;
        index = i;
        break;
      }
    }

    if (flag) {
      this.authService.login(flag).subscribe(
        (result) => {
          this.router.navigate(['adminProfile', this.adminList[index].id]);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    } else {
      alert('Incorrect Username or Password');
    }
    this.adminLoginForm.reset;
  }
}
