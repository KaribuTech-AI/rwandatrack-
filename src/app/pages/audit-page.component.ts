import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { auditRows } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { statusBadgeClass } from '../shared/ui-helpers';

@Component({
  selector: 'app-audit-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './audit-page.component.html',
})
export class AuditPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly filter = signal('All Actions');
  protected readonly rows = computed(() => {
    const value = this.filter();
    if (value === 'All Actions') return auditRows;
    if (value === 'Login Events') return auditRows.filter((row) => row[3] === 'Authentication');
    if (value === 'Data Changes') return auditRows.filter((row) => row[2].includes('UPDATE') || row[2].includes('FLAG'));
    if (value === 'API Calls') return auditRows.filter((row) => row[3] === 'API');
    return auditRows.filter((row) => row[6] === 'Failed');
  });

  protected exportAudit(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('audit')!);
  }

  protected badgeClass(status: string): string {
    return statusBadgeClass(status);
  }
}
