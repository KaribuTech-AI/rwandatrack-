import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

import { AppUiService } from './core/app-ui.service';
import { NAV_SECTIONS, PAGE_BY_PATH, PAGES } from './page-definitions';
import { ToastOutletComponent } from './shared/toast-outlet.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet, RouterLink, RouterLinkActive, ToastOutletComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private readonly router = inject(Router);
  protected readonly ui = inject(AppUiService);

  protected readonly navSections = NAV_SECTIONS;
  protected readonly searchQuery = signal('');
  protected readonly dateRanges = ['Last 7 days', 'Last 30 days', 'This quarter', 'This year'];

  protected readonly currentPage = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      startWith({ urlAfterRedirects: this.router.url } as NavigationEnd),
      map((event) => {
        const path = event.urlAfterRedirects.replace(/^\//, '').split('?')[0] || 'dashboard';
        return PAGE_BY_PATH.get(path) ?? PAGE_BY_PATH.get('dashboard')!;
      }),
    ),
    { initialValue: PAGE_BY_PATH.get('dashboard')! },
  );

  protected readonly filteredSearch = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    if (!query) {
      return [];
    }

    return PAGES.filter((page) =>
      `${page.title} ${page.sub} ${page.label}`.toLowerCase().includes(query),
    ).slice(0, 7);
  });

  protected navigateTo(path: string): void {
    this.searchQuery.set('');
    void this.router.navigate(['/', path]);
  }

  protected handleExport(): void {
    this.ui.exportPage(this.currentPage());
  }

  protected handleLogEvent(): void {
    this.ui.logEvent();
    void this.router.navigate(['/epcis-events']);
  }
}
