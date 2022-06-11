import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  userlist: any;
  currentUser: User = {
    name: '',
    contact: '',
    password: '',
    email: '',
  };
  constructor(private userService: SharedService, private router: Router) {
    this.passwordForm = new FormGroup({
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
    return this.passwordForm.get('email');
  }
  get p() {
    return this.passwordForm.get('password');
  }
  ngOnInit(): void {}
  resetPassword() {
    console.log(this.passwordForm.value);
    let flag = false;
    for (let i = 0; i < this.userlist.length; i++) {
      if (this.passwordForm.value.email == this.userlist[i].email) {
        this.currentUser.name = this.userlist[i].name;
        this.currentUser.email = this.userlist[i].email;
        this.currentUser.contact = this.userlist[i].contact;
        this.currentUser.userId = this.userlist[i].id;
        this.currentUser.password = this.passwordForm.value.password;
        this.userService.updateUserData(this.currentUser).subscribe(() => {
          alert('Password Reset Successful!');
          (error: any) => {
            console.log(error);
          };
        });
        flag = true;
        break;
      }
    }

    if (flag) this.router.navigate(['/']);
    else {
      alert('Incorrect Email!');
      this.passwordForm.reset;
    }
  }
}
