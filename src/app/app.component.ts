import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MapSvgComponent } from './map-svg/map-svg.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CountrySearchService } from './country-search.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapSvgComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private countrySearchService = inject(CountrySearchService);

  currentCountry: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  population: string = '';
  gdp: string = '';

  constructor() {
    this.changeCountry('US');
  }

  changeCountry(isocode2: string) {
    const countryData = this.countrySearchService.search(isocode2);

    this.currentCountry = countryData.countryName;
    this.capital = countryData.capital;
    this.region = countryData.region;
    this.incomeLevel = countryData.incomeLevel;
    this.population = countryData.population;
    this.gdp = countryData.gdp;
  }
}
