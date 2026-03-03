import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KPI } from '@shared/models/kpi.model';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.scss',
})
export class KpiCardComponent {
  kpi = input.required<KPI>();
}
