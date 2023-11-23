import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_services/home.service';

@Component({
  selector: 'app-folow-orders',
  templateUrl: './folow-orders.component.html',
  styleUrls: ['./folow-orders.component.scss']
})
export class FolowOrdersComponent implements OnInit {
  constructor(private homeService: HomeService) { }
  ngOnInit(): void {
    this.homeService.getShipmentTracking().subscribe({
      next: (data) => {

      }
    })
  }
}
