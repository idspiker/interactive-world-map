import { Component, Input } from '@angular/core';

import { CountryDataItemComponent } from '../country-data-item/country-data-item.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CountryDataItemComponent],
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
}
