import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-country-data-item',
  standalone: true,
  templateUrl: './country-data-item.component.html',
  styleUrl: './country-data-item.component.css',
})
export class CountryDataItemComponent {
  @Input() itemKey = '';
  @Input() itemValue = '';
}
