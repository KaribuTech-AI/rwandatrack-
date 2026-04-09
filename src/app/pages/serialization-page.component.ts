import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { serializationRows, serializationStats } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { StatGridComponent } from '../shared/stat-grid.component';

@Component({
  selector: 'app-serialization-page',
  standalone: true,
  imports: [CommonModule, FormsModule, StatGridComponent],
  templateUrl: './serialization-page.component.html',
})
export class SerializationPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly stats = serializationStats;
  protected readonly rows = serializationRows;
  protected readonly showIssueModal = signal(false);

  protected activationClass(value: string): string {
    return parseInt(value, 10) > 80 ? 'b-green' : 'b-amber';
  }

  protected exportSerialization(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('serialization')!);
  }

  protected issueRange(): void {
    this.showIssueModal.set(true);
  }

  protected closeIssueModal(): void {
    this.showIssueModal.set(false);
  }

  protected submitIssueRange(): void {
    this.showIssueModal.set(false);
    this.ui.showToast({
      icon: '📋',
      title: 'Serial range issued',
      sub: '50,000 serials allocated and ready for commissioning.',
      color: '#1a4fdb',
    });
  }
}
