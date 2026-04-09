import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';

import { PAGE_BY_PATH, PAGES } from '../page-definitions';

@Component({
  selector: 'app-generic-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './generic-page.component.html',
})
export class GenericPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  protected readonly page = toSignal(
    this.route.url.pipe(
      map((segments) => PAGE_BY_PATH.get(segments[0]?.path ?? '') ?? PAGE_BY_PATH.get('dashboard')!),
    ),
    { initialValue: PAGE_BY_PATH.get('dashboard')! },
  );

  protected readonly links = computed(() => PAGES.filter((item) => item.path !== this.page().path));

  protected navigate(path: string): void {
    void this.router.navigate(['/', path]);
  }
}
