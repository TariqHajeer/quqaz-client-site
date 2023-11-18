import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HomeActions } from '../_sheard/Actions/HomeActions';
import { Observable } from 'rxjs';
import { CountryDto } from '../_store/country';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }
  getCountries(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(HomeActions.Countries);
  }
}
