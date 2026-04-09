import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { stakeholderRows, stakeholderStats } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { StatGridComponent } from '../shared/stat-grid.component';
import { statusBadgeClass } from '../shared/ui-helpers';

@Component({
  selector: 'app-stakeholders-page',
  standalone: true,
  imports: [CommonModule, FormsModule, StatGridComponent],
  templateUrl: './stakeholders-page.component.html',
})
export class StakeholdersPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly stats = stakeholderStats;
  protected readonly rows = stakeholderRows;
  protected readonly showRegisterModal = signal(false);

  protected badgeClass(status: string): string {
    return statusBadgeClass(status);
  }

  protected exportStakeholders(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('stakeholders')!);
  }

  protected registerFacility(): void {
    this.showRegisterModal.set(true);
  }

  protected closeRegisterModal(): void {
    this.showRegisterModal.set(false);
  }

  protected submitRegisterFacility(): void {
    this.showRegisterModal.set(false);
    this.ui.showToast({
      icon: '🏢',
      title: 'Facility registration submitted',
      sub: 'New stakeholder has been queued for onboarding review.',
      color: '#0a7c55',
    });
  }
}
