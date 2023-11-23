import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_services/home.service';
import { MarketDto } from 'src/app/_store/market';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: MarketDto[] = [
  ];
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.homeService.market().subscribe({
      next: (value) => {
        this.clients = value;
      },
    })
  }

}
