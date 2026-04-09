import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppUiService } from '../core/app-ui.service';
import { analyticsBars, analyticsKpis, onboardingProgress, sparkDays, sparkValues } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { BarMetricsComponent } from '../shared/bar-metrics.component';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule, BarMetricsComponent],
  templateUrl: './analytics-page.component.html',
})
export class AnalyticsPageComponent {
  private readonly router = inject(Router);
  private readonly ui = inject(AppUiService);

  protected readonly analyticsKpis = analyticsKpis;
  protected readonly analyticsBars = analyticsBars;
  protected readonly onboardingProgress = onboardingProgress;
  protected readonly sparkValues = sparkValues;
  protected readonly sparkDays = sparkDays;

  protected navigate(path: string): void {
    void this.router.navigate(['/', path]);
  }

  protected exportReport(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('analytics')!);
  }
}
