import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { verificationHistory } from '../data/mock-data';

interface VerificationResult {
  tone: 'success' | 'danger' | 'warn';
  title: string;
  body: string;
  detail: string;
}

@Component({
  selector: 'app-product-verification-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-verification-page.component.html',
})
export class ProductVerificationPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly verifyInput = signal('');
  protected readonly verifyResult = signal<VerificationResult | null>(null);
  protected readonly history = verificationHistory;

  protected runVerification(value = this.verifyInput()): void {
    const normalized = value.trim();
    this.verifyInput.set(normalized);

    if (!normalized) {
      this.verifyResult.set(null);
    } else if (normalized.includes('104700')) {
      this.verifyResult.set({
        tone: 'danger',
        title: 'RECALLED - Do Not Dispense',
        body: 'Batch RW-2024-0412 has an active recall. This product must not be dispensed or sold.',
        detail: 'Contact Rwanda FDA immediately: recallalerts@rwandafda.gov.rw',
      });
    } else if (normalized.includes('500122')) {
      this.verifyResult.set({
        tone: 'warn',
        title: 'ON HOLD - Pending Investigation',
        body: 'This product is flagged for investigation. Do not dispense until clearance is issued.',
        detail: 'Reference CF-0040 · Gasabo District inspection · ETA 24 to 48 hours',
      });
    } else {
      this.verifyResult.set({
        tone: 'success',
        title: 'AUTHENTIC - Product Verified',
        body: 'This product is genuine, active, and fully traceable in the Rwanda pharmaceutical track and trace system.',
        detail: 'Last verified: Kigali Pharmacy Plus · 09 Apr 2026 · 10:11 · Batch SP-2026-041',
      });
    }

    const result = this.verifyResult();
    if (result) {
      this.ui.showToast({
        icon: result.tone === 'danger' ? '🚨' : result.tone === 'warn' ? '⚠️' : '✅',
        title: result.title,
        sub: result.detail,
        color: result.tone === 'danger' ? '#c82020' : result.tone === 'warn' ? '#a16207' : '#0a7c55',
      });
    }
  }

  protected resultClass(tone: VerificationResult['tone']): string {
    if (tone === 'danger') return 'verify-bad-box';
    if (tone === 'warn') return 'verify-hold-box';
    return 'verify-ok-box';
  }
}
