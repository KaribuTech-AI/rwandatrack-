import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { MapDot } from '../data/mock-data';

@Component({
  selector: 'app-mini-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-map.component.html',
})
export class MiniMapComponent {
  readonly dots = input.required<MapDot[]>();
  readonly height = input('150px');
  readonly caption = input('Rwanda · 5 Provinces · 30 Districts');
}
