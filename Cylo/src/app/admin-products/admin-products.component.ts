import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  constructor(private service: SharedService) {}
  productList: any = [];
  ngOnInit(): void {
    this.service.getProductData().subscribe((data) => {
      this.productList = data;
    });
  }
  confirmDelete(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.service.deleteProductData(id).subscribe((data: any) => {
        alert('Data Deleted Successfully!');
        this.ngOnInit();
      });
    }
  }
}
