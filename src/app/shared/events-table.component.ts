import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

import { EventRow } from '../data/mock-data';
import { statusBadgeClass } from './ui-helpers';

@Component({
  selector: 'app-events-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-table.component.html',
})
export class EventsTableComponent {
  readonly rows = input.required<EventRow[]>();
  readonly compact = input(false);
  protected readonly headers = computed(() =>
    this.compact()
      ? ['EPC / GTIN', 'Event Type', 'Actor', 'Location', 'Status', 'Timestamp']
      : ['Event ID', 'Type', 'EPC / GTIN', 'Actor', 'Location', 'Status', 'Timestamp'],
  );

  protected badgeClass(status: string): string {
    return statusBadgeClass(status);
  }
}
