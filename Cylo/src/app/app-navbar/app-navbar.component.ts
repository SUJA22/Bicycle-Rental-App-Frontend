import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
})
export class AppNavbarComponent implements OnInit {
  routeParams: Params | any;
  userId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private auth: AuthService
  ) {
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
  logout(): void {
    this.auth.logout();
  }
}
