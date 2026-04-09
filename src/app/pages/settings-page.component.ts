import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';

import { AppUiService } from '../core/app-ui.service';

interface SettingItem {
  title: string;
  description: string;
  enabled: boolean;
}

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings-page.component.html',
})
export class SettingsPageComponent {
  private readonly ui = inject(AppUiService);

  protected readonly settings = signal<SettingItem[]>([
    { title: 'Live Event Streaming', description: 'Push EPCIS events to connected systems in real-time', enabled: true },
    { title: 'SMS Recall Notifications', description: 'Broadcast SMS alerts for recalls to all facility contacts', enabled: true },
    { title: 'Email Digest', description: 'Daily email summary of system activity and alerts', enabled: true },
    { title: 'Offline Sync Mode', description: 'Allow facilities to queue events when offline for later sync', enabled: false },
    { title: 'Two-Factor Authentication', description: 'Require 2FA for all administrator and inspector logins', enabled: true },
    { title: 'Auto Recall Broadcast', description: 'Auto-notify all facilities when a recall is initiated', enabled: true },
    { title: 'API Rate Limiting', description: 'Enforce per-API-key request rate limits (1000/hr)', enabled: false },
    { title: 'Audit Log Retention', description: 'Retain complete audit logs for 12 months (365 days)', enabled: true },
    { title: 'EPCIS Strict Validation', description: 'Reject events that do not fully conform to GS1 EPCIS 2.0', enabled: true },
    { title: 'Public Verification Portal', description: 'Allow public product verification via QR code scanning', enabled: false },
  ]);

  protected readonly systemInfo = [
    ['Version', 'RwandaTrack v2.4.1'],
    ['EPCIS Standard', 'GS1 EPCIS 2.0'],
    ['Last Deploy', '09 Apr 2026 · 06:00 UTC'],
    ['Database', 'PostgreSQL 16 · RW-DC-01'],
    ['Backup Status', 'Last backup 4h ago'],
    ['Environment', 'Production - Rwanda FDA'],
  ] as const;

  protected toggleSetting(index: number): void {
    this.settings.update((settings) =>
      settings.map((entry, currentIndex) =>
        currentIndex === index ? { ...entry, enabled: !entry.enabled } : entry,
      ),
    );

    const setting = this.settings()[index];
    this.ui.showToast({
      icon: '⚙️',
      title: 'Setting updated',
      sub: `${setting.title} ${setting.enabled ? 'enabled' : 'disabled'}.`,
      color: '#0a7c55',
    });
  }

  protected saveSettings(): void {
    this.ui.showToast({
      icon: '✅',
      title: 'Settings saved',
      sub: 'All configuration changes applied successfully.',
      color: '#0a7c55',
    });
  }

  protected resetDefaults(): void {
    this.ui.showToast({
      icon: '↩',
      title: 'Reset complete',
      sub: 'Settings restored to system defaults.',
      color: '#1a4fdb',
    });
  }

  protected saveProfile(): void {
    this.ui.showToast({
      icon: '✅',
      title: 'Profile updated',
      sub: 'Your profile changes have been saved.',
      color: '#0a7c55',
    });
  }

  protected changePassword(): void {
    this.ui.showToast({
      icon: '🔑',
      title: 'Password reset',
      sub: 'Reset link sent to your email.',
      color: '#1a4fdb',
    });
  }

  protected runDiagnostics(): void {
    this.ui.showToast({
      icon: '🔧',
      title: 'System check',
      sub: 'Running diagnostics...',
      color: '#a16207',
    });
  }
}
