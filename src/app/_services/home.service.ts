import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeActions } from '../_sheard/Actions/HomeActions';
import { Observable } from 'rxjs';
import { BranchDto } from '../_store/branch';
import { StatisticsDto } from '../_store/Statistics';
import { CountryDto } from '../_store/country';
import { ShipmentTracking } from '../_sheard/constant';
import { ShipmentTrackingDto } from '../_store/shipment-tracking';
import { ReserveMailBoxDto } from '../_store/reserve-mail-box';
import { PagingDto } from '../_store/paging';
import { ClientMessageDto } from '../_store/client-message';
import { MarketDto } from '../_store/market';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }
  getBranches(): Observable<BranchDto[]> {
    return this.http.get<BranchDto[]>(HomeActions.Branches);
  }
  getStatistics(): Observable<StatisticsDto> {
    return this.http.get<StatisticsDto>(HomeActions.Statistics);
  }
  getCountries(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(HomeActions.Country);
  }
  getShipmentTracking(): Observable<any[]> {
    let item = this.getShipmentTrackingValue() as ShipmentTrackingDto;
    let params = new HttpParams();
    if (item.country)
      params = params.append("country", item.country);
    if (item.phone)
      params = params.append("phone", item.phone);
    if (item.code)
      params = params.append("code", item.code);
    return this.http.get<any[]>(HomeActions.GetShipmentTracking, { params: params });
  }
  setShipmentTrackingValue(value: any) {
    localStorage.setItem(ShipmentTracking, JSON.stringify(value));
  }
  private getShipmentTrackingValue() {
    return JSON.parse(localStorage.getItem(ShipmentTracking) as any);
  }
  removeShipmentTrackingValue() {
    return localStorage.removeItem(ShipmentTracking) as any;
  }

  reserveMailBox(params: ReserveMailBoxDto) {
    return this.http.post(HomeActions.ReserveMailBox, params);
  }
  getClientMessages(paging: PagingDto): Observable<any> {
    let params = new HttpParams();
    if (paging.Page)
      params = params.append("Page", paging.Page);
    if (paging.RowCount)
      params = params.append("RowCount", paging.RowCount);
    return this.http.get<any>(HomeActions.ClientMessages, { params: params });
  }
  createClientMessages(params: ClientMessageDto) {
    let formdata = new FormData();
    formdata.append("logo", params.Logo);
    formdata.append("message", params.Message);
    formdata.append("name", params.Name);
    return this.http.post(HomeActions.CreateClientMessages, formdata);
  }
  requestExternalShipment(params: any) {
    return this.http.post(HomeActions.RequestExternalShipment, params);
  }
  joinToTeam(params: any) {
    let formdata = new FormData();
    formdata.append("fistNamem", params.firstName);
    formdata.append("lastName", params.lastName);
    formdata.append("phone", params.phone);
    formdata.append("email", params.email);
    formdata.append("file", params.file);
    return this.http.post(HomeActions.JoinToTeam, formdata);
  }
  market(): Observable<MarketDto[]> {
    return this.http.get<MarketDto[]>(HomeActions.Market);
  }
}
