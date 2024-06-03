import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface CountrySearchResponse {
  countryName: string;
  capital: string;
  region: string;
  incomeLevel: string;
  population: string;
  gdp: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountrySearchService {
  constructor(private http: HttpClient) {}

  search(isocode2: string): CountrySearchResponse {
    const test = this.http
      .get(`http://api.worldbank.org/V2/country/${isocode2}?format=json`)
      .subscribe((x) => console.log(x));

    return {
      countryName: isocode2,
      capital: `Capital of ${isocode2}`,
      region: `Region of ${isocode2}`,
      incomeLevel: 'high',
      population: String(1),
      gdp: String(100),
    };
  }
}
