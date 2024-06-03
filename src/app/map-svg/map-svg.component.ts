import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map-svg',
  standalone: true,
  templateUrl: './world_w_isocode_handlers.svg',
  styleUrl: './map-svg.component.css',
})
export class MapSvgComponent {
  @Output() countryClicked = new EventEmitter();

  searchCountry(isocode2: string) {
    this.countryClicked.emit(isocode2);
  }
}
