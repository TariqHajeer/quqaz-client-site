import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePagesRoutingModule } from './home-pages-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePagesComponent } from './home-pages.component';
import { MainPageComponent } from './main-page/main-page.component';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OutOrdersComponent } from './out-orders/out-orders.component';
import { ClientsComponent } from './clients/clients.component';
import { FolowOrdersComponent } from './folow-orders/folow-orders.component';
import { SalaryOrdersComponent } from './salary-orders/salary-orders.component';
import { JoinTeamComponent } from './join-team/join-team.component';
import { GalleriaModule } from 'primeng/galleria';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ToastMessageService } from '../_services/toast-message.service';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomePagesComponent, MainPageComponent,
    NavBarComponent,
    OutOrdersComponent,
    ClientsComponent,
    FolowOrdersComponent,
    SalaryOrdersComponent,
    JoinTeamComponent],
  imports: [
    CommonModule,
    HomePagesRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    GalleriaModule,
    DividerModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    DropdownModule,
    DialogModule,
    InputTextareaModule,
    FileUploadModule,
    ToastModule
  ],
  providers: [MessageService, ToastMessageService]
})
export class HomePagesModule { }
