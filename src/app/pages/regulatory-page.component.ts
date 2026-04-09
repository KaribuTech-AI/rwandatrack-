import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';
import { regulatoryReports } from '../data/mock-data';

@Component({
  selector: 'app-regulatory-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regulatory-page.component.html',
})
export class RegulatoryPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly reports = regulatoryReports;

  protected generate(label: string): void {
    this.ui.showToast({
      icon: '📄',
      title: 'Generating report',
      sub: `${label} will download shortly.`,
      color: '#1a4fdb',
    });
  }

  protected schedule(label: string): void {
    this.ui.showToast({
      icon: '🗓️',
      title: 'Report scheduled',
      sub: `${label} added to weekly auto-delivery.`,
      color: '#0a7c55',
    });
  }
}
