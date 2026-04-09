import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

import { AppUiService } from '../core/app-ui.service';
import { notificationItems } from '../data/mock-data';
import { AlertsListComponent } from '../shared/alerts-list.component';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [CommonModule, AlertsListComponent],
  templateUrl: './notifications-page.component.html',
})
export class NotificationsPageComponent {
  private readonly router = inject(Router);
  private readonly ui = inject(AppUiService);
  protected readonly items = signal(notificationItems);

  protected navigate(path: string): void {
    void this.router.navigate(['/', path]);
  }

  protected markAllRead(): void {
    this.items.update((items) => items.map((item) => ({ ...item, unread: false })));
    this.ui.showToast({
      icon: '✅',
      title: 'All marked read',
      sub: 'Notifications have been marked as read.',
      color: '#0a7c55',
    });
  }
}
