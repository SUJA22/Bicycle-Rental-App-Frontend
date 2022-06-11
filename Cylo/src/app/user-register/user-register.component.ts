import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerUser: FormGroup;
  userlist: any;

  constructor(private userService: SharedService) {
    this.registerUser = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
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
  get c() {
    return this.registerUser.get('contact');
  }
  get e() {
    return this.registerUser.get('email');
  }
  get p() {
    return this.registerUser.get('password');
  }
  ngOnInit(): void {}
  postUser() {
    let flag = true;
    for (let i = 0; i < this.userlist.length; i++) {
      if (this.userlist[i].email === this.registerUser.value.email) {
        flag = false;
        break;
      }
    }
    if (flag) {
      this.userService
        .postUserData(this.registerUser.value)
        .subscribe((data) => {
          alert('Registration Successful!');
        });
    } else {
      alert('This email Id is already registered!');
    }

    this.registerUser.reset();
  }
}
