import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import {
  alerts,
  dashboardStats,
  events,
  integrations,
  journey,
  mapDots,
  productStatus,
  sparkDays,
  sparkEventCounts,
  sparkValues,
  stakeholderCoverage,
  transactionBars,
} from '../data/mock-data';
import { AppUiService } from '../core/app-ui.service';
import { AlertsListComponent } from '../shared/alerts-list.component';
import { BarMetricsComponent } from '../shared/bar-metrics.component';
import { EventsTableComponent } from '../shared/events-table.component';
import { MiniMapComponent } from '../shared/mini-map.component';
import { StatGridComponent } from '../shared/stat-grid.component';
import { integrationDot, integrationTone } from '../shared/ui-helpers';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, AlertsListComponent, BarMetricsComponent, EventsTableComponent, MiniMapComponent, StatGridComponent],
  templateUrl: './dashboard-page.component.html',
})
export class DashboardPageComponent {
  private readonly router = inject(Router);
  private readonly ui = inject(AppUiService);

  protected readonly stats = dashboardStats;
  protected readonly alerts = alerts;
  protected readonly events = events;
  protected readonly journey = journey;
  protected readonly integrations = integrations;
  protected readonly sparkDays = sparkDays;
  protected readonly sparkValues = sparkValues;
  protected readonly sparkEventCounts = sparkEventCounts;
  protected readonly transactionBars = transactionBars;
  protected readonly stakeholderCoverage = stakeholderCoverage;
  protected readonly productStatus = productStatus;
  protected readonly mapDots = mapDots;

  protected navigate(path: string): void {
    void this.router.navigate(['/', path]);
  }

  protected navigateFromStat(item: { route?: string }): void {
    if (item.route) {
      this.navigate(item.route);
    }
  }

  protected showFlowInfo(title: string, sub: string): void {
    this.ui.showToast({
      icon: '📊',
      title,
      sub,
      color: '#1a4fdb',
    });
  }

  protected showTrendInfo(day: string, count: string): void {
    this.ui.showToast({
      icon: '📈',
      title: day,
      sub: `${count} EPCIS events logged.`,
      color: '#0a7c55',
    });
  }

  protected integrationTone(status: 'ok' | 'warn' | 'err'): string {
    return integrationTone(status);
  }

  protected integrationDot(status: 'ok' | 'warn' | 'err'): string {
    return integrationDot(status);
  }
}
