import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css'],
})
export class AdminRegisterComponent implements OnInit {
  registerAdmin: FormGroup;
  adminList: any;
  constructor(private userService: SharedService) {
    this.registerAdmin = new FormGroup({
      name: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
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
    const response = this.userService.getAdminData().subscribe((data) => {
      this.adminList = data;
    });
  }
  get e() {
    return this.registerAdmin.get('email');
  }
  get p() {
    return this.registerAdmin.get('password');
  }
  ngOnInit(): void {}
  postAdmin() {
    let flag = true;
    for (let i = 0; i < this.adminList.length; i++) {
      if (this.adminList[i].email === this.registerAdmin.value.email) {
        flag = false;
        break;
      }
    }
    if (flag) {
      this.userService
        .postAdminData(this.registerAdmin.value)
        .subscribe((data) => {
          alert('Registration Successful!');
        });
    } else {
      alert('This email Id is already registered!');
    }

    this.registerAdmin.reset();
  }
}
