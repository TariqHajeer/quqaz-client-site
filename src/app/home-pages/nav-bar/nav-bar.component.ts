import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() chageRoute: EventEmitter<number> = new EventEmitter();
  index: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.setIndex();
  }
  setIndex() {
    switch (this.router.url) {
      case '/home':
        this.index = 0;
        break;
      case '/home/salary-orders':
        this.index = 1;
        break;
      case '/home/folow-order':
        this.index = 2;
        break;
      case '/home/clients':
        this.index = 3;
        break;
      case '/home/out-orders':
        this.index = 4;
        break;
      case '/home/join-team':
        this.index = 5;
        break;
      default:
        this.index = 0;
        break;
    }
  }
  changeActiveRoute(i: number) {
    this.index = 0;
    this.chageRoute.emit(i);
  }
}
