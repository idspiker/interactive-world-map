import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map-svg',
  standalone: true,
  templateUrl: './world_w_handlers.svg',
  styleUrl: './map-svg.component.css',
})
export class MapSvgComponent {
  @Output() countryClicked = new EventEmitter();

  searchCountry(countryName: string) {
    this.countryClicked.emit(countryName);
  }
}
