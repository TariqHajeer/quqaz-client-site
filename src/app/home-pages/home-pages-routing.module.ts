import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePagesComponent } from './home-pages.component';
import { MainPageComponent } from './main-page/main-page.component';
import { OutOrdersComponent } from './out-orders/out-orders.component';
import { ClientsComponent } from './clients/clients.component';
import { FolowOrdersComponent } from './folow-orders/folow-orders.component';
import { SalaryOrdersComponent } from './salary-orders/salary-orders.component';
import { JoinTeamComponent } from './join-team/join-team.component';


const routes: Routes = [
  {
    path: '',
    component: HomePagesComponent,
    children: [
      {
        path: '',
        component: MainPageComponent
      },
      {
        path: 'out-orders',
        component: OutOrdersComponent
      },
      {
        path: 'clients',
        component: ClientsComponent
      },
      {
        path: 'folow-order',
        component: FolowOrdersComponent
      },
      {
        path: 'salary-orders',
        component: SalaryOrdersComponent
      },
      {
        path: 'join-team',
        component: JoinTeamComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePagesRoutingModule { }
