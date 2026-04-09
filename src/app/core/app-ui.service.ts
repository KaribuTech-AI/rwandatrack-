import { Injectable, signal } from '@angular/core';

import { PageMeta } from '../page-definitions';

export interface AppToast {
  id: number;
  icon: string;
  title: string;
  sub: string;
  color: string;
}

@Injectable({ providedIn: 'root' })
export class AppUiService {
  private nextToastId = 1;

  readonly selectedRange = signal('Last 7 days');
  readonly toasts = signal<AppToast[]>([]);

  setRange(range: string): void {
    this.selectedRange.set(range);
    this.showToast({
      icon: '📅',
      title: 'Date range updated',
      sub: `Showing data for ${range.toLowerCase()}.`,
      color: '#1a4fdb',
    });
  }

  exportPage(page: PageMeta): void {
    this.showToast({
      icon: '⬇',
      title: `Export queued for ${page.title}`,
      sub: `Preparing ${page.title.toLowerCase()} data for download.`,
      color: '#0a7c55',
    });
  }

  logEvent(): void {
    this.showToast({
      icon: '📝',
      title: 'Event logging opened',
      sub: 'Use the EPCIS Events page to capture a new movement or traceability record.',
      color: '#1a4fdb',
    });
  }

  showToast(toast: Omit<AppToast, 'id'>): void {
    const id = this.nextToastId++;
    this.toasts.update((toasts) => [...toasts, { id, ...toast }]);
    window.setTimeout(() => this.dismissToast(id), 4200);
  }

  dismissToast(id: number): void {
    this.toasts.update((toasts) => toasts.filter((toast) => toast.id !== id));
  }
}
