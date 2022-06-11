import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(private service: SharedService) {}
  productList: any = [];

  ngOnInit(): void {
    this.service.getProductData().subscribe((data) => {
      this.productList = data;
    });
  }
}
