import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css'],
})
export class ViewOrdersComponent implements OnInit {
  orderlist: any;
  searchText: string = '';
  constructor(private _userService: SharedService) {
    const response = this._userService.getOrderData().subscribe((data) => {
      this.orderlist = data;
    });
  }

  ngOnInit(): void {}
}
