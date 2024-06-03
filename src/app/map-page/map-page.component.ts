import { Component, inject } from '@angular/core';
import { CountrySearchService } from '../country-search.service';
import { MapSvgComponent } from '../map-svg/map-svg.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-map-page',
  standalone: true,
  imports: [MapSvgComponent, SidebarComponent],
  templateUrl: './map-page.component.html',
  styleUrl: './map-page.component.css',
})
export class MapPageComponent {
  private countrySearchService = inject(CountrySearchService);

  currentCountry: string = '';
  capital: string = '';
  region: string = '';
  incomeLevel: string = '';
  population: string = '';
  gdp: string = '';

  countryDataLoaded = false;
  populationDataLoaded = false;
  gdpDataLoaded = false;

  constructor() {
    this.changeCountry('US');
  }

  changeCountry(isocode2: string) {
    this.countryDataLoaded = false;
    this.populationDataLoaded = false;
    this.gdpDataLoaded = false;

    const searchResp = this.countrySearchService.search(isocode2);

    // Using timeout to normalize perceived load time.
    // The load component was flashing for a split second, which is
    // visually unappealing.
    setTimeout(() => {
      searchResp.countryData.subscribe((resp) => {
        this.currentCountry = resp[1][0].name;
        this.capital = resp[1][0].capitalCity;
        this.region = resp[1][0].region.value;
        this.incomeLevel = resp[1][0].incomeLevel.value;

        this.countryDataLoaded = true;
      });

      searchResp.populationData.subscribe((resp) => {
        for (const record of resp[1]) {
          if (record.value !== null) {
            this.population = record.value.toLocaleString();
            this.populationDataLoaded = true;
            return;
          }
        }

        this.population = 'unknown';
        this.populationDataLoaded = true;
      });

      searchResp.gdpData.subscribe((resp) => {
        for (const record of resp[1]) {
          if (record.value !== null) {
            this.gdp = '$' + record.value.toLocaleString();
            this.gdpDataLoaded = true;
            return;
          }
        }
        this.gdp = 'unknown';
        this.gdpDataLoaded = true;
      });
    }, 500);
  }
}
