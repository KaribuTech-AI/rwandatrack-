import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';
import { integrations, liveMovementStats } from '../data/mock-data';
import { integrationDot, integrationTone } from '../shared/ui-helpers';

@Component({
  selector: 'app-integrations-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './integrations-page.component.html',
})
export class IntegrationsPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly integrations = integrations;
  protected readonly stats = liveMovementStats;

  protected tone(status: 'ok' | 'warn' | 'err'): string {
    return integrationTone(status);
  }

  protected dot(status: 'ok' | 'warn' | 'err'): string {
    return integrationDot(status);
  }

  protected action(title: string, sub: string, color = '#1a4fdb', icon = '🔗'): void {
    this.ui.showToast({ icon, title, sub, color });
  }
}
