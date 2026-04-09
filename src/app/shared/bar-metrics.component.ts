import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { BarMetric } from '../data/mock-data';

@Component({
  selector: 'app-bar-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-metrics.component.html',
})
export class BarMetricsComponent {
  readonly items = input.required<BarMetric[]>();
  readonly labelWidth = input('90px');
  readonly valueWidth = input('50px');
}
