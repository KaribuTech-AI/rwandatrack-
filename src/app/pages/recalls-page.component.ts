import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { activeRecallCards, recallRows } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { statusBadgeClass } from '../shared/ui-helpers';

@Component({
  selector: 'app-recalls-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recalls-page.component.html',
})
export class RecallsPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly activeCards = activeRecallCards;
  protected readonly rows = recallRows;
  protected readonly showRecallModal = signal(false);

  protected badgeClass(status: string): string {
    return statusBadgeClass(status);
  }

  protected exportRecalls(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('recalls')!);
  }

  protected initiateRecall(): void {
    this.showRecallModal.set(true);
  }

  protected closeRecallModal(): void {
    this.showRecallModal.set(false);
  }

  protected submitRecall(): void {
    this.showRecallModal.set(false);
    this.ui.showToast({
      icon: '🚨',
      title: 'Recall initiated',
      sub: 'Recall draft has been created and queued for facility broadcast.',
      color: '#c82020',
    });
  }
}
