import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';
import { inventoryRows, inventoryStats } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';
import { StatGridComponent } from '../shared/stat-grid.component';
import { statusBadgeClass } from '../shared/ui-helpers';

@Component({
  selector: 'app-inventory-page',
  standalone: true,
  imports: [CommonModule, StatGridComponent],
  templateUrl: './inventory-page.component.html',
})
export class InventoryPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly stats = inventoryStats;
  protected readonly rows = inventoryRows;

  protected badgeClass(status: string): string {
    return statusBadgeClass(status);
  }

  protected exportInventory(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('inventory')!);
  }

  protected logMovement(): void {
    this.ui.logEvent();
  }
}
