import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_services/home.service';
import { BranchDto } from 'src/app/_store/branch';

@Component({
  selector: 'app-salary-orders',
  templateUrl: './salary-orders.component.html',
  styleUrls: ['./salary-orders.component.scss']
})
export class SalaryOrdersComponent implements OnInit {
  countries: BranchDto[] = [];
  responsiveOptions: any[] = [];
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.homeService.getBranches().subscribe({
      next: (data) => {
        this.countries = data;
        this.responsiveOptions = [
          {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
          },
          {
            breakpoint: '991px',
            numVisible: 2,
            numScroll: 1
          },
          {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
          }
        ];
      }
    })
  }
}
