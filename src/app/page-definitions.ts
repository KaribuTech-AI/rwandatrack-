export type PageKey =
  | 'dashboard'
  | 'supply-chain-map'
  | 'analytics'
  | 'product-verification'
  | 'inventory'
  | 'epcis-events'
  | 'serialization'
  | 'dispensing'
  | 'recalls'
  | 'counterfeit'
  | 'audit'
  | 'regulatory'
  | 'integrations'
  | 'stakeholders'
  | 'api'
  | 'users'
  | 'notifications'
  | 'settings';

export interface PageMeta {
  key: PageKey;
  path: string;
  label: string;
  navLabel?: string;
  icon: string;
  title: string;
  sub: string;
  badge?: string;
  badgeClass?: string;
}

export interface NavSection {
  label: string;
  items: PageMeta[];
}

export const NAV_SECTIONS: NavSection[] = [
  {
    label: 'Overview',
    items: [
      { key: 'dashboard', path: 'dashboard', label: 'Dashboard', icon: '🏠', title: 'Dashboard', sub: 'Pharmaceutical Supply Chain Overview' },
      { key: 'supply-chain-map', path: 'supply-chain-map', label: 'Supply Chain Map', icon: '🗺️', title: 'Supply Chain Map', sub: 'Live geographic product movement' },
      { key: 'analytics', path: 'analytics', label: 'Analytics & Reports', navLabel: 'Analytics & Reports', icon: '📊', title: 'Analytics & Reports', sub: 'Transaction trends and performance metrics' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { key: 'product-verification', path: 'product-verification', label: 'Product Verification', icon: '🔍', title: 'Product Verification', sub: 'Verify serialized product authenticity', badge: 'NEW', badgeClass: 'nb-blue' },
      { key: 'inventory', path: 'inventory', label: 'Inventory Tracking', navLabel: 'Inventory Tracking', icon: '📦', title: 'Inventory Tracking', sub: 'Real-time stock levels across all facilities' },
      { key: 'epcis-events', path: 'epcis-events', label: 'EPCIS Events', icon: '🔄', title: 'EPCIS Events', sub: 'Full event log in GS1 EPCIS 2.0 format' },
      { key: 'serialization', path: 'serialization', label: 'Serialization', icon: '📋', title: 'Serialization Manager', sub: 'GTIN registration and serial number issuance' },
      { key: 'dispensing', path: 'dispensing', label: 'Dispensing Records', navLabel: 'Dispensing Records', icon: '🏥', title: 'Dispensing Records', sub: 'Point-of-care dispensing events from facilities' },
    ],
  },
  {
    label: 'Compliance',
    items: [
      { key: 'recalls', path: 'recalls', label: 'Recall Management', navLabel: 'Recall Management', icon: '🚨', title: 'Recall Management', sub: 'Initiate and track product recalls nationwide', badge: '2', badgeClass: 'nb-red' },
      { key: 'counterfeit', path: 'counterfeit', label: 'Counterfeit Alerts', navLabel: 'Counterfeit Alerts', icon: '🛡️', title: 'Counterfeit Alerts', sub: 'Flagged suspicious products under investigation', badge: '5', badgeClass: 'nb-red' },
      { key: 'audit', path: 'audit', label: 'Audit Trails', icon: '📑', title: 'Audit Trails', sub: 'Complete immutable system access and change log' },
      { key: 'regulatory', path: 'regulatory', label: 'Regulatory Reports', navLabel: 'Regulatory Reports', icon: '⚖️', title: 'Regulatory Reports', sub: 'Compliance reports for Rwanda FDA and MoH' },
    ],
  },
  {
    label: 'Integrations',
    items: [
      { key: 'integrations', path: 'integrations', label: 'System Integrations', navLabel: 'System Integrations', icon: '🔗', title: 'System Integrations', sub: 'Manage external system connections and health', badge: '6', badgeClass: 'nb-blue' },
      { key: 'stakeholders', path: 'stakeholders', label: 'Stakeholders', icon: '🏢', title: 'Stakeholder Registry', sub: 'All registered pharmaceutical facilities' },
      { key: 'api', path: 'api', label: 'API Console', icon: '🔌', title: 'API Console', sub: 'Test EPCIS endpoints and monitor integration health' },
    ],
  },
  {
    label: 'Administration',
    items: [
      { key: 'users', path: 'users', label: 'User Management', navLabel: 'User Management', icon: '👥', title: 'User Management', sub: 'System users, roles, and permissions' },
      { key: 'notifications', path: 'notifications', label: 'Notifications', icon: '🔔', title: 'Notifications', sub: 'System alerts and activity notifications', badge: '7', badgeClass: 'nb-red' },
      { key: 'settings', path: 'settings', label: 'Settings', icon: '⚙️', title: 'Settings', sub: 'System configuration and user preferences' },
    ],
  },
];

export const PAGES = NAV_SECTIONS.flatMap((section) => section.items);
export const PAGE_BY_PATH = new Map(PAGES.map((page) => [page.path, page]));
