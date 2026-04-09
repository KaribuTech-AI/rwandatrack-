import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';

import { AlertItem } from '../data/mock-data';

@Component({
  selector: 'app-alerts-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alerts-list.component.html',
})
export class AlertsListComponent {
  readonly items = input.required<AlertItem[]>();
  readonly navigate = output<string>();
}
