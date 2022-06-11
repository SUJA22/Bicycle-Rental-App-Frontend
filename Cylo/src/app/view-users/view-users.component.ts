import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  userlist: any;
  constructor(private userService: SharedService) {
    const response = this.userService.getUserData().subscribe((data) => {
      this.userlist = data;
    });
  }

  ngOnInit(): void {}
}
