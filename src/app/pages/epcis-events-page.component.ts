import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { events } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { EventsTableComponent } from '../shared/events-table.component';

@Component({
  selector: 'app-epcis-events-page',
  standalone: true,
  imports: [CommonModule, FormsModule, EventsTableComponent],
  templateUrl: './epcis-events-page.component.html',
})
export class EpcisEventsPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly filter = signal('All Types');
  protected readonly rows = computed(() => {
    const value = this.filter();
    if (value === 'All Types') return events;
    return events.filter((event) => event.type === value);
  });

  protected exportEvents(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('epcis-events')!);
  }

  protected logEvent(): void {
    this.ui.logEvent();
  }
}
