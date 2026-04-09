import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { integrationCards, largeMapDots, liveMovementStats, provinceCoverage } from '../data/mock-data';
import { BarMetricsComponent } from '../shared/bar-metrics.component';
import { MiniMapComponent } from '../shared/mini-map.component';

@Component({
  selector: 'app-supply-chain-map-page',
  standalone: true,
  imports: [CommonModule, BarMetricsComponent, MiniMapComponent],
  templateUrl: './supply-chain-map-page.component.html',
})
export class SupplyChainMapPageComponent {
  private readonly router = inject(Router);

  protected readonly mapDots = largeMapDots;
  protected readonly integrationCards = integrationCards;
  protected readonly provinceCoverage = provinceCoverage;
  protected readonly liveMovementStats = liveMovementStats;

  protected navigate(path: string): void {
    void this.router.navigate(['/', path]);
  }
}
