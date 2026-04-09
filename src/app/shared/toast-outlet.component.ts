import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';

@Component({
  selector: 'app-toast-outlet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-outlet.component.html',
})
export class ToastOutletComponent {
  protected readonly ui = inject(AppUiService);
}
