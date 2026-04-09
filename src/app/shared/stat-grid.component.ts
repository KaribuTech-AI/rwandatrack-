import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

import { StatCard } from '../data/mock-data';

@Component({
  selector: 'app-stat-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stat-grid.component.html',
})
export class StatGridComponent {
  readonly items = input.required<StatCard[]>();
  readonly cardClick = input<(item: StatCard) => void>();

  protected handleClick(item: StatCard): void {
    this.cardClick()?.(item);
  }
}
