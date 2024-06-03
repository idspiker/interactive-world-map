import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CountrySearchResponse {
  countryData: Observable<CountryAPIResponse>;
  populationData: Observable<IndicatorAPIResponse>;
  gdpData: Observable<IndicatorAPIResponse>;
}

interface ResponseMetaData {
  lastupdated?: string;
  page: number;
  pages: number;
  per_page: string;
  sourceid?: string;
  total: number;
}

interface ResponseFieldObj {
  id: string;
  iso2code?: string;
  value: string;
}

interface CountryResponseData {
  adminRegion: ResponseFieldObj;
  capitalCity: string;
  id: string;
  incomeLevel: ResponseFieldObj;
  iso2code: string;
  latitude: string;
  lendingType: ResponseFieldObj;
  longitude: string;
  name: string;
  region: ResponseFieldObj;
}

interface IndicatorResponseData {
  country: ResponseFieldObj;
  countryiso3code: string;
  date: string;
  decimal: number;
  indicator: ResponseFieldObj;
  obs_status: string;
  unit: string;
  value: null | number;
}

type CountryAPIResponse = [ResponseMetaData, [CountryResponseData]];

type IndicatorAPIResponse = [ResponseMetaData, IndicatorResponseData[]];

@Injectable({
  providedIn: 'root',
})
export class CountrySearchService {
  constructor(private http: HttpClient) {}

  search(isocode2: string): CountrySearchResponse {
    const countryData = this.http.get<CountryAPIResponse>(
      `http://api.worldbank.org/V2/country/${isocode2}?format=json`
    );

    const populationData = this.http.get<IndicatorAPIResponse>(
      `http://api.worldbank.org/v2/country/${isocode2}/indicator/SP.POP.TOTL?format=json`
    );

    const gdpData = this.http.get<IndicatorAPIResponse>(
      `http://api.worldbank.org/v2/country/${isocode2}/indicator/NY.GDP.MKTP.KD?format=json`
    );

    return {
      countryData,
      populationData,
      gdpData,
    };
  }
}
