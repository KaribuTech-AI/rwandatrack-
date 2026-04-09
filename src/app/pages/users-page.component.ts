import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';
import { roleMatrix, users } from '../data/mock-data';
import { statusBadgeClass } from '../shared/ui-helpers';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly users = users;
  protected readonly roleMatrix = roleMatrix;
  protected readonly showAddUserModal = signal(false);

  protected badgeClass(status: string): string {
    return statusBadgeClass(status);
  }

  protected toast(title: string, sub: string, color = '#1a4fdb', icon = '👤'): void {
    this.ui.showToast({ icon, title, sub, color });
  }

  protected openAddUser(): void {
    this.showAddUserModal.set(true);
  }

  protected closeAddUser(): void {
    this.showAddUserModal.set(false);
  }

  protected submitAddUser(): void {
    this.showAddUserModal.set(false);
    this.toast('User invited', 'A new user invitation has been sent.', '#0a7c55', '👥');
  }
}
