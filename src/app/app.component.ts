import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MapSvgComponent } from './map-svg/map-svg.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapSvgComponent, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  currentCountry = 'United States';

  changeCountry(countryName: string) {
    this.currentCountry = countryName;
  }
}
