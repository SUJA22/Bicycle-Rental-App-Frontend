import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: FormGroup;
  constructor(private productService: SharedService) {
    this.product = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      perHourCost: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}
  postProduct() {
    console.log(this.product);
    this.productService
      .postProductData(this.product.value)
      .subscribe((data) => {
        alert('Product Added Successfully!');
      });
    this.product.reset();
  }
}
