import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  routeParams: Params | any;
  product: FormGroup;
  prodList: any;
  productData: Product = {
    name: '',
    type: '',
    perHourCost: 0,
    imagePath: '',
  };
  index: number = 0;
  constructor(
    private productService: SharedService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.getRouteParams();
    this.product = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      perHourCost: new FormControl('', Validators.required),
      imagePath: new FormControl('', Validators.required),
    });

    const response = this.productService.getProductData().subscribe((data) => {
      this.prodList = data;

      for (let i = 0; i < this.prodList.length; i++) {
        if (this.routeParams.id == this.prodList[i].id) {
          this.index = i;
          break;
        }
      }
      this.productData.name = this.prodList[this.index].name;
      this.productData.type = this.prodList[this.index].type;
      this.productData.perHourCost = this.prodList[this.index].perHourCost;
      this.productData.imagePath = this.prodList[this.index].imagePath;
      this.productData.id = this.prodList[this.index].id;
    });
  }
  ngOnInit(): void {}
  getRouteParams() {
    // Route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.routeParams = params;
    });
  }
  updateProduct() {
    this.productService.updateProductData(this.productData).subscribe(() => {
      alert('Data Updated Successfully');
      (error: any) => {
        console.log(error);
      };
    });
  }
}
