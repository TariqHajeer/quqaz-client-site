import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_services/home.service';
import { CountryDto } from 'src/app/_store/country';

@Component({
  selector: 'app-salary-orders',
  templateUrl: './salary-orders.component.html',
  styleUrls: ['./salary-orders.component.scss']
})
export class SalaryOrdersComponent implements OnInit {
  countries: CountryDto[] = [];
  responsiveOptions: any[] = [];
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.homeService.getCountries().subscribe({
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
