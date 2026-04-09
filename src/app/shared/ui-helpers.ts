export function statusBadgeClass(status: string): string {
  switch (status.toLowerCase()) {
    case 'active':
    case 'authentic':
    case 'healthy':
    case 'ok':
      return 'b-green';
    case 'transit':
    case 'resolved':
    case 'dispensed':
      return 'b-blue';
    case 'hold':
    case 'on hold':
    case 'watch':
      return 'b-amber';
    case 'recalled':
    case 'err':
    case 'error':
      return 'b-red';
    default:
      return 'b-gray';
  }
}

export function integrationTone(status: 'ok' | 'warn' | 'err'): string {
  if (status === 'ok') return 'it-ok';
  if (status === 'warn') return 'it-warn';
  return 'it-err';
}

export function integrationDot(status: 'ok' | 'warn' | 'err'): string {
  if (status === 'ok') return 'd-green';
  if (status === 'warn') return 'd-amber';
  return 'd-red';
}
