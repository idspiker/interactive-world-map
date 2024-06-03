import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-map-svg',
  standalone: true,
  templateUrl: './world_w_ids.svg',
  styleUrl: './map-svg.component.css',
})
export class MapSvgComponent {
  @Input() initialCountry = 'US';
  @Output() countryClicked = new EventEmitter();

  private selectedCountryID = '';
  private defaultColor = '#dbb5b5';
  private selectedColor = '#bb9898';

  searchCountry(isocode2: string) {
    this.focusCountry(isocode2);

    this.countryClicked.emit(isocode2);
  }

  focusCountry(isocode2: string) {
    const countryPath = document.getElementById(isocode2);

    const previousCountryPath = document.getElementById(this.selectedCountryID);

    if (
      typeof previousCountryPath !== 'undefined' &&
      previousCountryPath !== null
    ) {
      previousCountryPath.style.fill = this.defaultColor;
    }

    if (typeof countryPath !== 'undefined' && countryPath !== null) {
      countryPath.style.fill = this.selectedColor;
      this.selectedCountryID = isocode2;
    }
  }
}
