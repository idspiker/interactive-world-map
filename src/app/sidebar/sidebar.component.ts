import { Component, Input } from '@angular/core';

import { CountryDataItemComponent } from '../country-data-item/country-data-item.component';
import { SidebarLoadingComponent } from '../sidebar-loading/sidebar-loading.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CountryDataItemComponent, SidebarLoadingComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() countryName = '';
  @Input() capitalName = '';
  @Input() countryRegion = '';
  @Input() incomeLevel = '';
  @Input() population = '';
  @Input() gdp = '';
  @Input() countryDataLoaded = false;
  @Input() populationDataLoaded = false;
  @Input() gdpDataLoaded = false;
}
