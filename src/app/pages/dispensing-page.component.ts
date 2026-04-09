import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';
import { dispensingRows } from '../data/mock-data';
import { PAGE_BY_PATH } from '../page-definitions';

@Component({
  selector: 'app-dispensing-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dispensing-page.component.html',
})
export class DispensingPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly rows = dispensingRows;

  protected exportDispensing(): void {
    this.ui.exportPage(PAGE_BY_PATH.get('dispensing')!);
  }
}
