import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppUiService } from '../core/app-ui.service';

@Component({
  selector: 'app-api-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-page.component.html',
})
export class ApiPageComponent {
  private readonly ui = inject(AppUiService);
  protected readonly method = signal('POST');
  protected readonly endpoint = signal('/epcis/events');
  protected readonly requestBody = signal(`{"epcisVersion": "2.0",
"schemaVersion": "2.0",
"creationDate": "2026-04-09T10:24:00Z",
"epcisBody": {
  "eventList": [{
    "type": "ObjectEvent",
    "eventTime": "2026-04-09T10:24:00Z",
    "action": "ADD",
    "epcList": ["urn:epc:id:sgtin:0614141.107346.2017"],
    "bizStep": "urn:epcglobal:cbv:bizstep:commissioning",
    "disposition": "urn:epcglobal:cbv:disp:active",
    "readPoint": {"id": "urn:epc:id:sgln:0614141.00001.0"}
  }]
}}`);
  protected readonly response = signal('// Ready to send EPCIS sample request');
  protected readonly quickEndpoints = [
    ['POST', '/epcis/events', 'Submit EPCIS event'],
    ['GET', '/epcis/events/{id}', 'Get event by ID'],
    ['GET', '/products/{gtin}/trace', 'Full product trace'],
    ['GET', '/products/{gtin}/verify', 'Verify authenticity'],
    ['POST', '/recalls', 'Initiate recall'],
    ['GET', '/facilities', 'List all facilities'],
    ['GET', '/inventory/status', 'Real-time stock'],
    ['GET', '/alerts/active', 'Active alerts'],
  ] as const;
  protected readonly apiHealth = [
    ['Uptime (30d)', '99.94%', 'var(--accent)'],
    ['Avg Response', '42ms', 'var(--accent2)'],
    ['Requests / hr', '14,200', 'var(--text)'],
    ['Error Rate', '0.06%', 'var(--accent)'],
  ] as const;

  protected runApi(): void {
    this.response.set('// Sending request...');
    const latency = Math.floor(Math.random() * 60) + 20;
    window.setTimeout(() => {
      this.response.set(
        `HTTP 201 Created - ${latency}ms\n{\n  "method": "${this.method()}",\n  "endpoint": "${this.endpoint()}",\n  "eventID": "EVT-${8841 + Math.floor(Math.random() * 999)}",\n  "status": "ACCEPTED",\n  "timestamp": "${new Date().toISOString()}",\n  "epcisVersion": "2.0",\n  "message": "EPCIS event successfully recorded to track and trace server"\n}`,
      );
      this.ui.showToast({
        icon: '🔌',
        title: 'API call successful',
        sub: `Mock EPCIS event accepted in ${latency}ms.`,
        color: '#1a4fdb',
      });
    }, 700);
  }

  protected selectEndpoint(method: string, endpoint: string): void {
    this.method.set(method);
    this.endpoint.set(endpoint);
    this.ui.showToast({
      icon: '🔌',
      title: 'Endpoint selected',
      sub: `${method} ${endpoint}`,
      color: '#1a4fdb',
    });
  }
}
