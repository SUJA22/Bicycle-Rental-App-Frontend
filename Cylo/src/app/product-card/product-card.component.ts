import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() name = '';
  @Input() type = '';
  @Input() cost = '';
  @Input() imagePath = '';
  routeParams: Params | any;
  userId: any;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {
    this.getRouteParams();
  }

  ngOnInit(): void {
    this.userId = this.routeParams.id;
  }
  getRouteParams() {
    // Route parameters
    this.activatedRoute.params.subscribe((params) => {
      this.routeParams = params;
    });
  }
}
