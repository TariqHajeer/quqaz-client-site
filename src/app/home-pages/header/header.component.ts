import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/_services/home.service';
import { StatisticsDto } from 'src/app/_store/Statistics';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  routeIndex: number = 0;
  statistics: StatisticsDto | undefined;

  constructor(private router: Router,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.setIndex();
    console.log(this.router.url);

    if (this.router.url == '/') {
      this.homeService.getStatistics().subscribe({
        next: (data) => {
          this.statistics = data;
        }
      })
    }
  }
  setIndex() {
    switch (this.router.url) {
      case '/':
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
