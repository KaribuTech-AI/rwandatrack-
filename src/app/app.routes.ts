import { Routes } from '@angular/router';

import { AnalyticsPageComponent } from './pages/analytics-page.component';
import { ApiPageComponent } from './pages/api-page.component';
import { AuditPageComponent } from './pages/audit-page.component';
import { CounterfeitPageComponent } from './pages/counterfeit-page.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { DispensingPageComponent } from './pages/dispensing-page.component';
import { EpcisEventsPageComponent } from './pages/epcis-events-page.component';
import { GenericPageComponent } from './pages/generic-page.component';
import { IntegrationsPageComponent } from './pages/integrations-page.component';
import { InventoryPageComponent } from './pages/inventory-page.component';
import { NotificationsPageComponent } from './pages/notifications-page.component';
import { ProductVerificationPageComponent } from './pages/product-verification-page.component';
import { RecallsPageComponent } from './pages/recalls-page.component';
import { RegulatoryPageComponent } from './pages/regulatory-page.component';
import { SettingsPageComponent } from './pages/settings-page.component';
import { SerializationPageComponent } from './pages/serialization-page.component';
import { StakeholdersPageComponent } from './pages/stakeholders-page.component';
import { SupplyChainMapPageComponent } from './pages/supply-chain-map-page.component';
import { UsersPageComponent } from './pages/users-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'supply-chain-map', component: SupplyChainMapPageComponent },
  { path: 'analytics', component: AnalyticsPageComponent },
  { path: 'product-verification', component: ProductVerificationPageComponent },
  { path: 'inventory', component: InventoryPageComponent },
  { path: 'epcis-events', component: EpcisEventsPageComponent },
  { path: 'serialization', component: SerializationPageComponent },
  { path: 'dispensing', component: DispensingPageComponent },
  { path: 'recalls', component: RecallsPageComponent },
  { path: 'counterfeit', component: CounterfeitPageComponent },
  { path: 'audit', component: AuditPageComponent },
  { path: 'regulatory', component: RegulatoryPageComponent },
  { path: 'integrations', component: IntegrationsPageComponent },
  { path: 'stakeholders', component: StakeholdersPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'notifications', component: NotificationsPageComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: 'api', component: ApiPageComponent },
  { path: ':page', component: GenericPageComponent },
  { path: '**', redirectTo: 'dashboard' },
];
