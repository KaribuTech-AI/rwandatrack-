import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';
import { counterfeitRows, counterfeitStats } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';

@Component({
  selector: 'app-counterfeit-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counterfeit-page.component.html',
})
export class CounterfeitPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly stats = counterfeitStats;
  protected readonly rows = signal([...counterfeitRows]);

  protected exportCounterfeit(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('counterfeit')!);
  }

  protected investigate(id: string): void {
    this.ui.showToast({
      icon: '🛡️',
      title: 'Investigation opened',
      sub: `${id} escalated to Rwanda FDA inspector.`,
      color: '#c82020',
    });
  }

  protected dismiss(id: string): void {
    this.rows.update((rows) => rows.filter((row) => row[0] !== id));
    this.ui.showToast({
      icon: '✅',
      title: 'Flag dismissed',
      sub: `${id} cleared from active alerts.`,
      color: '#0a7c55',
    });
  }
}
