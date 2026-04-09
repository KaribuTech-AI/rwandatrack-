export interface StatCard {
  label: string;
  value: string;
  delta: string;
  tone: string;
  icon: string;
  cardClass?: string;
  route?: string;
}

export interface EventRow {
  id: string;
  type: string;
  epc: string;
  actor: string;
  location: string;
  status: string;
  timestamp: string;
}

export interface AlertItem {
  title: string;
  meta: string;
  time: string;
  icon: string;
  iconClass: string;
  route: string;
  unread?: boolean;
}

export interface IntegrationStatus {
  name: string;
  status: 'ok' | 'warn' | 'err';
  description?: string;
  ip?: string;
  sync?: string;
  events?: string;
}

export interface JourneyStep {
  icon: string;
  borderColor: string;
  title: string;
  description: string;
  time: string;
}

export interface BarMetric {
  label: string;
  color: string;
  width: number;
  value: string;
  sublabel?: string;
}

export interface CoverageItem {
  name: string;
  sub: string;
  color: string;
  value: string;
}

export interface MapDot {
  top: string;
  left: string;
  size: number;
  delay: string;
}

export interface ProductStatusItem {
  color: string;
  label: string;
  value: string;
}

export interface InventoryRow {
  facility: string;
  facilityType: string;
  product: string;
  quantity: string;
  batch: string;
  expiry: string;
  lastMovement: string;
  status: string;
}

export interface RecallRow {
  id: string;
  product: string;
  batch: string;
  units: string;
  scope: string;
  status: string;
}

export interface UserRecord {
  ini: string;
  color: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const dashboardStats: StatCard[] = [
  { label: 'Tracked Products', value: '2.41M', delta: '12.4% vs last week', tone: 'delta-up', icon: '\u{1F4E6}', cardClass: 'sc-green', route: 'inventory' },
  { label: 'Active Facilities', value: '1,847', delta: '94 newly onboarded', tone: 'delta-up', icon: '\u{1F3E2}', cardClass: 'sc-blue', route: 'stakeholders' },
  { label: 'Active Recalls', value: '2', delta: '3 resolved this week', tone: 'delta-down', icon: '\u{1F6A8}', cardClass: 'sc-red', route: 'recalls' },
  { label: 'Counterfeit Flags', value: '5', delta: 'Under investigation', tone: 'delta-warn', icon: '\u26A0\uFE0F', cardClass: 'sc-amber', route: 'counterfeit' },
];

export const inventoryStats: StatCard[] = [
  { label: 'Total SKUs Tracked', value: '4,218', delta: '34 this week', tone: 'delta-up', icon: '\u{1F4E6}' },
  { label: 'Facilities Reporting', value: '1,724', delta: '94% of registered', tone: 'delta-up', icon: '\u{1F3EA}' },
  { label: 'Low Stock Alerts', value: '12', delta: 'Requires attention', tone: 'delta-warn', icon: '\u26A0\uFE0F' },
];

export const analyticsKpis: StatCard[] = [
  { label: 'Total Events (30d)', value: '1,247,832', delta: '18.2% vs last period', tone: 'delta-up', icon: '\u{1F4CA}' },
  { label: 'Avg. Daily Events', value: '41,594', delta: '4.1% vs last period', tone: 'delta-up', icon: '\u{1F4C8}' },
  { label: 'Verification Scans', value: '324,100', delta: '9.7% vs last period', tone: 'delta-up', icon: '\u{1F50E}' },
];

export const events: EventRow[] = [
  { id: 'EVT-8841', type: 'Commissioning', epc: '0614141.107346.2017', actor: 'Shelys Pharma Ltd', location: 'Kigali - Mfr', status: 'active', timestamp: '09 Apr \u00B7 10:24' },
  { id: 'EVT-8840', type: 'Aggregation', epc: '0614141.777890.0052', actor: 'RMS Warehouse', location: 'Kicukiro', status: 'transit', timestamp: '09 Apr \u00B7 10:19' },
  { id: 'EVT-8839', type: 'Receiving', epc: '0614141.034215.9831', actor: 'Kigali Pharmacy Plus', location: 'Nyarugenge', status: 'active', timestamp: '09 Apr \u00B7 10:11' },
  { id: 'EVT-8838', type: 'Dispensing', epc: '0614141.290001.1102', actor: 'CHK Hospital', location: 'Kigali Central', status: 'dispensed', timestamp: '09 Apr \u00B7 09:58' },
  { id: 'EVT-8837', type: 'Hold / Suspect', epc: '0614141.500122.4400', actor: 'Rwanda FDA Inspector', location: 'Gasabo', status: 'hold', timestamp: '09 Apr \u00B7 09:44' },
  { id: 'EVT-8836', type: 'Recall - Batch', epc: '0614141.104700.0019', actor: 'Rwanda FDA', location: 'Nationwide', status: 'recalled', timestamp: '08 Apr \u00B7 17:30' },
  { id: 'EVT-8835', type: 'Commissioning', epc: '0614141.201100.0330', actor: 'Shelys Pharma Ltd', location: 'Kigali - Mfr', status: 'active', timestamp: '08 Apr \u00B7 14:20' },
  { id: 'EVT-8834', type: 'Shipping', epc: '0614141.890022.1440', actor: 'AfriMed Ltd', location: 'Musanze', status: 'transit', timestamp: '08 Apr \u00B7 11:10' },
];

export const alerts: AlertItem[] = [
  { title: 'Recall: Batch RW-2024-0412', meta: 'Amoxicillin 500mg \u00B7 38 units \u00B7 Nationwide', time: '2h ago', icon: '\u{1F6A8}', iconClass: 'ai-red', route: 'recalls' },
  { title: 'Counterfeit Suspected', meta: 'GTIN 0614141.5001 \u00B7 Gasabo District', time: '4h ago', icon: '\u26A0\uFE0F', iconClass: 'ai-amber', route: 'counterfeit' },
  { title: 'Duplicate Serial Detected', meta: 'Same serial at 2 locations simultaneously', time: '5h ago', icon: '\u26A0\uFE0F', iconClass: 'ai-amber', route: 'counterfeit' },
  { title: 'Diversion Detected', meta: 'Product moved outside authorized chain', time: '6h ago', icon: '\u{1F504}', iconClass: 'ai-amber', route: 'audit' },
  { title: 'ESW Sync Delayed', meta: 'Customs data 12 minutes behind real-time', time: '14m ago', icon: '\u{1F517}', iconClass: 'ai-blue', route: 'integrations' },
  { title: 'Recall RW-2024-0405 Resolved', meta: 'All 112 units deactivated successfully', time: '1d ago', icon: '\u2705', iconClass: 'ai-green', route: 'recalls' },
];

export const notificationItems: AlertItem[] = [
  { title: 'Recall Initiated', meta: 'Amoxicillin 500mg recall broadcast to all facilities', time: '2h ago', icon: '\u{1F6A8}', iconClass: 'ai-red', route: 'recalls', unread: true },
  { title: 'Counterfeit Flag CF-0041', meta: 'Serial not found in registry during Gasabo inspection', time: '4h ago', icon: '\u26A0\uFE0F', iconClass: 'ai-amber', route: 'counterfeit', unread: true },
  { title: 'ESW Sync Delay', meta: 'Single Window integration is running 12 minutes behind', time: '14m ago', icon: '\u{1F517}', iconClass: 'ai-blue', route: 'integrations', unread: true },
  { title: 'New Batch Commissioned', meta: '14,200 units serialized at Shelys Pharma', time: '1h ago', icon: '\u{1F4E6}', iconClass: 'ai-green', route: 'epcis-events', unread: true },
  { title: 'Low Stock Alert', meta: 'CHK Hospital has dropped below metformin threshold', time: '3h ago', icon: '\u26A0\uFE0F', iconClass: 'ai-amber', route: 'inventory', unread: true },
  { title: 'Recall Resolved', meta: 'Recall RW-2024-0405 fully closed and archived', time: '1d ago', icon: '\u2705', iconClass: 'ai-green', route: 'recalls' },
  { title: 'API Rate Limit Warning', meta: 'Integration key rms-api-key approaching hourly limit', time: '2d ago', icon: '\u{1F50C}', iconClass: 'ai-blue', route: 'api' },
  { title: 'New Facility Onboarded', meta: 'Bugesera Health Center activated successfully', time: '3d ago', icon: '\u{1F3E2}', iconClass: 'ai-green', route: 'stakeholders' },
];

export const integrations: IntegrationStatus[] = [
  { name: 'RMS Core', status: 'ok', description: 'National medical stores synchronization and warehouse events', ip: '10.0.0.8', sync: '2m ago', events: '1,920/hr' },
  { name: 'Rwanda FDA', status: 'ok', description: 'Regulatory oversight, recalls, and counterfeit escalations', ip: '196.49.12.5', sync: '1m ago', events: '240/hr' },
  { name: 'OpenMRS', status: 'ok', description: 'Hospital dispensing and verification data feed', ip: '10.0.1.22', sync: '3m ago', events: '860/hr' },
  { name: 'eBuzima', status: 'warn', description: 'Community health reporting with intermittent queue spikes', ip: '10.0.1.35', sync: '12m ago', events: '540/hr' },
  { name: 'Single Window', status: 'warn', description: 'Import and customs clearance events from ESW', ip: '172.16.10.4', sync: '14m ago', events: '1,120/hr' },
  { name: 'SMS Gateway', status: 'err', description: 'Outbound SMS recall and alert notification channel', ip: '172.16.20.14', sync: '43m ago', events: '45/hr' },
];

export const journey: JourneyStep[] = [
  { icon: '\u{1F3ED}', borderColor: 'var(--accent2)', title: 'Commissioning Event', description: 'Serialized at Shelys Pharma \u00B7 Batch #SP-2026-041', time: '09 Apr \u00B7 08:14' },
  { icon: '\u{1F4E6}', borderColor: 'var(--accent)', title: 'Shipping Event', description: 'Transferred to RMS Warehouse \u00B7 Kicukiro', time: '09 Apr \u00B7 09:02' },
  { icon: '\u{1F3EC}', borderColor: 'var(--accent3)', title: 'Receiving Event', description: 'Accepted at Kigali Pharmacy Plus \u00B7 Nyarugenge', time: '09 Apr \u00B7 10:11' },
  { icon: '\u{1F48A}', borderColor: 'var(--purple)', title: 'Dispensing Event', description: 'Dispensed to patient at CHK \u00B7 Rx #RX-9901', time: '09 Apr \u00B7 10:24' },
];

export const sparkValues = [35, 52, 48, 65, 60, 80, 92];
export const sparkDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];
export const sparkEventCounts = ['9,400', '14,200', '13,100', '17,600', '16,300', '21,800', '24,100'];

export const transactionBars: BarMetric[] = [
  { label: 'Commissioning', color: '#1a4fdb', width: 72, value: '14,200' },
  { label: 'Transfers', color: '#0a7c55', width: 58, value: '11,450' },
  { label: 'Dispensing', color: '#5b21b6', width: 41, value: '8,020' },
  { label: 'Returns', color: '#a16207', width: 12, value: '2,310' },
];

export const stakeholderCoverage: CoverageItem[] = [
  { name: 'Retail Pharmacies', sub: '853 registered', color: '#0a7c55', value: '91%' },
  { name: 'Wholesale Pharmacies', sub: '168 registered', color: '#1a4fdb', value: '88%' },
  { name: 'Public Hospitals', sub: '57 facilities', color: '#5b21b6', value: '100%' },
  { name: 'Health Centers', sub: '533 facilities', color: '#a16207', value: '74%' },
  { name: 'Private Clinics', sub: '360 facilities', color: '#c94a18', value: '62%' },
];

export const productStatus: ProductStatusItem[] = [
  { color: '#0a7c55', label: 'Active', value: '68%' },
  { color: '#1a4fdb', label: 'In Transit', value: '18%' },
  { color: '#5b21b6', label: 'Dispensed', value: '10%' },
  { color: '#c94a18', label: 'Recalled/Hold', value: '4%' },
];

export const mapDots: MapDot[] = [
  { top: '35%', left: '48%', size: 9, delay: '0s' },
  { top: '50%', left: '56%', size: 9, delay: '0.35s' },
  { top: '65%', left: '42%', size: 9, delay: '0.7s' },
  { top: '28%', left: '63%', size: 6, delay: '1.05s' },
  { top: '72%', left: '60%', size: 6, delay: '1.4s' },
  { top: '44%', left: '30%', size: 6, delay: '1.75s' },
  { top: '58%', left: '70%', size: 6, delay: '2.1s' },
];

export const largeMapDots: MapDot[] = [
  ...mapDots,
  { top: '80%', left: '35%', size: 7, delay: '2.45s' },
  { top: '20%', left: '45%', size: 7, delay: '2.8s' },
];

export const provinceCoverage: BarMetric[] = [
  { label: 'Kigali City', color: '#0a7c55', width: 95, value: '95%' },
  { label: 'Northern Province', color: '#1a4fdb', width: 81, value: '81%' },
  { label: 'Southern Province', color: '#5b21b6', width: 74, value: '74%' },
  { label: 'Eastern Province', color: '#a16207', width: 68, value: '68%' },
  { label: 'Western Province', color: '#c94a18', width: 62, value: '62%' },
];

export const liveMovementStats: BarMetric[] = [
  { label: 'Active Shipments in Transit', color: 'var(--accent2)', width: 0, value: '142', sublabel: '+18 vs yesterday' },
  { label: 'Avg. Chain Length (hops)', color: 'var(--accent)', width: 0, value: '3.4', sublabel: 'stable' },
  { label: 'Same-day Verifications', color: 'var(--accent)', width: 0, value: '1,204', sublabel: '+290 vs avg' },
  { label: 'Offline Queued Events', color: 'var(--warn)', width: 0, value: '37', sublabel: 'Awaiting sync' },
];

export const analyticsBars: BarMetric[] = [
  { label: 'Commissioning', color: '#1a4fdb', width: 72, value: '482,110' },
  { label: 'Shipping / Transfer', color: '#0a7c55', width: 58, value: '388,430' },
  { label: 'Receiving', color: '#0a7c55', width: 51, value: '341,200' },
  { label: 'Dispensing', color: '#5b21b6', width: 38, value: '254,890' },
  { label: 'Returns', color: '#a16207', width: 14, value: '93,800' },
  { label: 'Recalls / Deactivation', color: '#c82020', width: 4, value: '28,402' },
];

export const onboardingProgress: BarMetric[] = [
  { label: 'Retail Pharmacies', color: '#0a7c55', width: 91, value: '853/937' },
  { label: 'Wholesale Pharmacies', color: '#1a4fdb', width: 88, value: '148/168' },
  { label: 'Public Hospitals', color: '#5b21b6', width: 100, value: '57/57' },
  { label: 'Health Centers', color: '#a16207', width: 74, value: '396/533' },
  { label: 'Private Clinics', color: '#c94a18', width: 62, value: '222/360' },
];

export const inventoryRows: InventoryRow[] = [
  { facility: 'Kigali Pharmacy Plus', facilityType: 'Retail Pharmacy', product: 'Amoxicillin 500mg', quantity: '1,240', batch: 'SP-2026-041', expiry: 'Dec 2027', lastMovement: '09 Apr \u00B7 10:11', status: 'active' },
  { facility: 'RMS Central Warehouse', facilityType: 'Distributor', product: 'Paracetamol 1g', quantity: '42,800', batch: 'UC-2026-081', expiry: 'Jun 2028', lastMovement: '09 Apr \u00B7 09:02', status: 'active' },
  { facility: 'CHK Hospital', facilityType: 'Public Hospital', product: 'Metformin 850mg', quantity: '312', batch: 'RW-2026-003', expiry: 'Mar 2027', lastMovement: '09 Apr \u00B7 09:58', status: 'hold' },
  { facility: 'Gasabo HC', facilityType: 'Health Center', product: 'Ibuprofen 400mg', quantity: '0', batch: 'AF-2024-015', expiry: '\u2014', lastMovement: '08 Apr \u00B7 17:30', status: 'recalled' },
  { facility: 'Remera Pharmacy', facilityType: 'Retail Pharmacy', product: 'Amoxicillin 250mg', quantity: '880', batch: 'SP-2026-039', expiry: 'Nov 2027', lastMovement: '09 Apr \u00B7 08:45', status: 'active' },
  { facility: 'Muhima Hospital', facilityType: 'Public Hospital', product: 'Artemether 80mg', quantity: '4,100', batch: 'AM-2026-007', expiry: 'Aug 2027', lastMovement: '08 Apr \u00B7 14:22', status: 'active' },
];

export const recallRows: RecallRow[] = [
  { id: 'RW-2024-0412', product: 'Amoxicillin 500mg', batch: 'SP-2024-041', units: '38 units', scope: 'Nationwide', status: 'Active' },
  { id: 'RW-2024-0415', product: 'Ibuprofen 400mg', batch: 'AF-2024-015', units: '22 units', scope: 'Kigali Region', status: 'Active' },
  { id: 'RW-2024-0405', product: 'Metformin 850mg', batch: 'RW-2024-003', units: '112 units', scope: 'Nationwide', status: 'Resolved' },
];

export const verificationHistory = [
  ['0614141.107346.2017', 'Amoxicillin 500mg', 'FDA Inspector', 'Authentic', '09 Apr \u00B7 10:24'],
  ['0614141.034215.9831', 'Paracetamol 1g', 'Kigali Pharmacy+', 'Authentic', '09 Apr \u00B7 09:58'],
  ['0614141.500122.4400', 'Metformin 850mg', 'RMS Officer', 'On Hold', '09 Apr \u00B7 09:44'],
  ['0614141.104700.0019', 'Ibuprofen 400mg', 'CHK Hospital', 'Recalled', '08 Apr \u00B7 17:30'],
  ['0614141.777890.0052', 'Artemether 80mg', 'Musanze HC', 'Authentic', '08 Apr \u00B7 14:12'],
] as const;

export const integrationCards = [
  { icon: '\u{1F3ED}', label: 'Manufacturers', count: '12', color: '#1a4fdb' },
  { icon: '\u2708\uFE0F', label: 'Importers', count: '38', color: '#0a7c55' },
  { icon: '\u{1F3EC}', label: 'Wholesalers', count: '170', color: '#c94a18' },
  { icon: '\u{1F48A}', label: 'Pharmacies', count: '853', color: '#a16207' },
  { icon: '\u{1F3E5}', label: 'Health Facilities', count: '950', color: '#5b21b6' },
] as const;

export const serializationStats: StatCard[] = [
  { label: 'GTINs Registered', value: '4,218', delta: 'Active catalog', tone: 'delta-up', icon: '\u{1F4CB}' },
  { label: 'Serial Ranges Issued', value: '1.2M', delta: 'Across all manufacturers', tone: 'delta-up', icon: '\u{1F522}' },
  { label: 'Pending Activation', value: '34,880', delta: 'Awaiting commissioning', tone: 'delta-warn', icon: '\u23F3' },
];

export const serializationRows = [
  ['06141410734620', 'Amoxicillin 500mg', 'Shelys Pharma', '001000', '099999', '99,000', '97%', '09 Apr 2026'],
  ['06141410342159', 'Paracetamol 1g', 'Universal Corp', '100000', '199999', '100,000', '89%', '07 Apr 2026'],
  ['06141412901010', 'Metformin 850mg', 'Rwanda Pharm', '200000', '249999', '50,000', '72%', '05 Apr 2026'],
  ['06141411047000', 'Ibuprofen 400mg', 'AfriMed Ltd', '250000', '299999', '50,000', '41%', '02 Apr 2026'],
  ['06141418900220', 'Artemether 80mg', 'Shelys Pharma', '300000', '349999', '50,000', '88%', '28 Mar 2026'],
] as const;

export const dispensingRows = [
  ['RX-9901', 'Amoxicillin 500mg', '0614141.290001.1102', 'CHK Hospital', 'PAT-****4821', '09 Apr \u00B7 10:24', 'EMR (OpenMRS)'],
  ['RX-9900', 'Paracetamol 1g', '0614141.034215.9831', 'Kigali Pharmacy+', 'PAT-****3309', '09 Apr \u00B7 09:58', 'POS System'],
  ['RX-9899', 'Metformin 850mg', '0614141.107346.2017', 'Muhima Hospital', 'PAT-****7712', '09 Apr \u00B7 08:45', 'EMR (eBuzima)'],
  ['RX-9898', 'Artemether 80mg', '0614141.201100.0330', 'Remera Pharmacy', 'PAT-****1190', '08 Apr \u00B7 16:30', 'POS System'],
  ['RX-9897', 'Ibuprofen 400mg', '0614141.110200.6611', 'Bugesera HC', 'PAT-****5534', '08 Apr \u00B7 14:00', 'HPEMR'],
] as const;

export const stakeholderStats: StatCard[] = [
  { label: 'Retail Pharmacies', value: '853', delta: '91% coverage', tone: 'delta-up', icon: '\u{1F3EA}' },
  { label: 'Health Facilities', value: '950', delta: '84% active', tone: 'delta-up', icon: '\u{1F3E5}' },
  { label: 'Wholesalers & Dist.', value: '170', delta: '94% active', tone: 'delta-up', icon: '\u{1F3EC}' },
];

export const stakeholderRows = [
  ['Kigali Pharmacy Plus', 'Retail Pharmacy', 'Nyarugenge', '0614141000001', 91, 'active'],
  ['CHK Hospital', 'Public Hospital', 'Kigali', '0614141000002', 100, 'active'],
  ['RMS Central Warehouse', 'Distributor', 'Kicukiro', '0614141000003', 96, 'active'],
  ['Bugesera Health Center', 'Health Center', 'Bugesera', '0614141000008', 74, 'active'],
  ['AfriMed Wholesale', 'Wholesale Pharmacy', 'Musanze', '0614141000011', 62, 'warn'],
] as const;

export const activeRecallCards = [
  ['RW-2024-0412', 'Amoxicillin 500mg', 'SP-2024-041', '38', 'Nationwide', '09 Apr 2026'],
  ['RW-2024-0415', 'Ibuprofen 400mg', 'AF-2024-015', '22', 'Kigali Region', '08 Apr 2026'],
] as const;

export const counterfeitStats = [
  ['5', 'Active Flags', 'var(--danger)'],
  ['12', 'Investigated This Month', 'var(--accent2)'],
  ['3', 'Confirmed Counterfeits', 'var(--accent)'],
] as const;

export const counterfeitRows = [
  ['CF-0041', 'GTIN 0614141.5001', 'Gasabo District', 'Scan mismatch - serial not found in registry', 'Unverified Serial', '4h ago'],
  ['CF-0040', 'GTIN 0614141.2210', 'Nyarugenge', 'Duplicate serial detected at two locations simultaneously', 'Duplicate Serial', '6h ago'],
  ['CF-0039', 'GTIN 0614141.8801', 'Huye District', 'Label anomaly reported by pharmacist - tampered packaging', 'Tampered Label', '1d ago'],
  ['CF-0038', 'GTIN 0614141.3390', 'Musanze', 'Expired product re-entering supply chain via unauthorized route', 'Chain Violation', '1d ago'],
  ['CF-0037', 'GTIN 0614141.1124', 'Rubavu', 'Unauthorized importer code detected on product label', 'Invalid Importer', '2d ago'],
] as const;

export const auditRows = [
  ['09 Apr \u00B7 10:24', 'oliver.uwantege', 'VIEW_EVENTS', 'EPCIS Events', 'Viewed event log - 10 records', '196.49.12.4', 'Success'],
  ['09 Apr \u00B7 10:19', 'rms.api', 'POST_EVENT', 'API', 'Aggregation event submitted - EVT-8840', '10.0.0.8', 'Success'],
  ['09 Apr \u00B7 09:44', 'fda.inspector', 'FLAG_PRODUCT', 'Counterfeit', 'Flagged GTIN 0614141.5001 - Gasabo', '196.49.33.7', 'Success'],
  ['09 Apr \u00B7 09:30', 'unknown', 'LOGIN_FAIL', 'Authentication', '3 failed attempts - locked out', '102.23.45.9', 'Failed'],
  ['09 Apr \u00B7 09:02', 'rms.api', 'POST_EVENT', 'API', 'Commissioning event - EVT-8839', '10.0.0.8', 'Success'],
  ['08 Apr \u00B7 17:30', 'fda.admin', 'INITIATE_RECALL', 'Recall Mgmt', 'Recall RW-2024-0412 initiated', '196.49.12.5', 'Success'],
  ['08 Apr \u00B7 14:20', 'oliver.uwantege', 'LOGIN', 'Authentication', 'Session started', '196.49.12.4', 'Success'],
  ['08 Apr \u00B7 11:10', 'j.nkurunziza', 'UPDATE_STOCK', 'Inventory', 'Stock adjusted - AfriMed Musanze', '10.0.2.11', 'Success'],
] as const;

export const regulatoryReports = [
  ['\u{1F4CA}', 'Monthly Traceability Report', 'Full product movement summary for regulatory submission to Rwanda FDA', 'Generate PDF'],
  ['\u{1F6A8}', 'Recall Status Report', 'Status of all active and resolved recall events with audit trail', 'Generate PDF'],
  ['\u{1F6E1}\uFE0F', 'Counterfeit Incident Report', 'Flagged, investigated, and confirmed counterfeit incidents summary', 'Generate CSV'],
  ['\u{1F4E6}', 'Supply Chain Coverage Report', 'Facility onboarding and nationwide coverage metrics by district', 'Generate PDF'],
  ['\u{1F517}', 'Integration Health Report', 'Status and performance of all 6 connected external systems', 'Generate CSV'],
  ['\u{1F4CB}', 'Serialization Utilization Report', 'GTIN registration, serial range usage, and activation rates', 'Generate PDF'],
  ['\u{1F4C8}', 'Performance Analytics Report', 'Transaction volumes, event types, and trend analysis over period', 'Generate Excel'],
  ['\u{1F3E5}', 'Dispensing Summary Report', 'Aggregated dispensing data by facility, product, and region', 'Generate PDF'],
] as const;

export const users: UserRecord[] = [
  { ini: 'OW', color: '#0a7c55', name: 'Oliver Uwantege', email: 'oliver.uwantege@enabel.be', role: 'Business Analyst - eHealth', status: 'active' },
  { ini: 'AG', color: '#1a4fdb', name: 'Antoine Gatera', email: 'antoine.gatera@enabel.be', role: 'Strategy Expert - Health', status: 'active' },
  { ini: 'FN', color: '#5b21b6', name: 'Florence Nyirazinyoye', email: 'florence.n@rwandafda.gov.rw', role: 'Regulatory Inspector', status: 'active' },
  { ini: 'JK', color: '#c94a18', name: 'Jean Kagame', email: 'jean.kagame@moh.gov.rw', role: 'Supply Officer', status: 'active' },
  { ini: 'AM', color: '#a16207', name: 'Aline Mukamana', email: 'aline.mukamana@rms.rw', role: 'Administrator', status: 'locked' },
] as const;

export const roleMatrix = [
  ['Administrator', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'],
  ['Business Analyst', 'Yes', 'Yes', 'With approval', 'No', 'Yes', 'Yes'],
  ['Regulatory Inspector', 'Yes', 'Yes', 'Yes', 'No', 'No', 'Yes'],
  ['Pharmacist', 'Yes', 'Yes', 'No', 'No', 'No', 'Own data'],
  ['Supply Officer', 'Yes', 'Yes', 'No', 'No', 'Yes', 'Yes'],
  ['Read-Only Auditor', 'Yes', 'No', 'No', 'No', 'No', 'Yes'],
] as const;
