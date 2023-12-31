import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeIndex: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setIndex();
  }
  setIndex() {
    switch (this.router.url) {
      case '':
        this.routeIndex = 0;
        break;
      case '/salary-orders':
        this.routeIndex = 1;
        break;
      case '/folow-order':
        this.routeIndex = 2;
        break;
      case '/clients':
        this.routeIndex = 3;
        break;
      case '/out-orders':
        this.routeIndex = 4;
        break;
      case '/join-team':
        this.routeIndex = 5;
        break;
      default:
        this.routeIndex = 0;
        break;
    }
  }
  onChangeRoute(event: any) {
    this.routeIndex = event;
  }
}
