import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Order } from '../order';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-user-confirm-order',
  templateUrl: './user-confirm-order.component.html',
  styleUrls: ['./user-confirm-order.component.css'],
})
export class UserConfirmOrderComponent implements OnInit {
  routeParams: Params | any;
  orderForm: FormGroup;
  index: number = 0;
  currentOrder: Order = {
    address: '',
    startDate: '',
    endDate: '',
    cost: 0,
  };
  prodList: any;
  constructor(
    private userService: SharedService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.getRouteParams();
    this.orderForm = new FormGroup({
      address: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
    });
    //getting product list
    const response = this.userService.getProductData().subscribe((data) => {
      this.prodList = data;
    });
  }
  get a() {
    return this.orderForm.get('address');
  }
  get e() {
    return this.orderForm.get('endDate');
  }
  get s() {
    return this.orderForm.get('startDate');
  }

  ngOnInit(): void {}
  getRouteParams() {
    // Route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.routeParams = params;
    });
  }
  postOrder() {
    for (let i = 0; i < this.prodList.length; i++) {
      if (this.routeParams.id2 == this.prodList[i].name) {
        this.index = i;
        break;
      }
    }
    this.currentOrder.address = this.orderForm.value.address;
    this.currentOrder.startDate = this.orderForm.value.startDate;
    this.currentOrder.endDate = this.orderForm.value.endDate;
    let date1: any = new Date(this.orderForm.value.startDate);
    let date2: any = new Date(this.orderForm.value.endDate);
    let difftime: number = Math.abs(date2.getTime() - date1.getTime());
    this.currentOrder.cost =
      Math.ceil(difftime / (1000 * 60 * 60)) *
      this.prodList[this.index].perHourCost;
    this.currentOrder.userId = this.routeParams.id;
    this.currentOrder.prodName = this.routeParams.id2;
    this.userService.postOrderData(this.currentOrder).subscribe((data) => {
      alert(
        'Order Confirmed! Please pay Rs. ' +
          this.currentOrder.cost +
          ' to the CyloWala.'
      );
    });
    this.orderForm.reset();
  }
}
