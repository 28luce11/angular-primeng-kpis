import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { KpiService } from '../../core/http/kpi.service';
import { KPI } from '@shared/models/kpi.model';
import { KpiCardComponent } from '@shared/components/kpi-card/kpi-card.component';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, KpiCardComponent],
  providers: [KpiService, CurrencyPipe, DecimalPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private readonly kpiService = inject(KpiService);
  private readonly currencyPipe = inject(CurrencyPipe);
  private readonly decimalPipe = inject(DecimalPipe);

  public featuredKpi$: Observable<KPI> = this.getFeaturedKpi();
  public featuredKpiBadgeLabel: string = '';
  public kpis$: Observable<KPI[]> = this.getAllOtherKpis();
  public loading = true;
  public showAll = false;
  public readonly initialLimit = 3;


  private getFeaturedKpi(): Observable<KPI> {
    return this.kpiService.getFeaturedKpi().pipe(
      tap((kpi) => {
        const value = typeof kpi.value === 'number' ? kpi.value : 0;
        const percent = `${kpi.percentageChange >= 0 ? '+' : ''}${this.decimalPipe.transform(kpi.percentageChange, '1.1-2')}%`;
        const amount = value * (kpi.percentageChange / 100);
        const amountStr = `${amount >= 0 ? '+' : ''}${this.currencyPipe.transform(amount, 'USD', 'symbol', '1.0-0')}`;
        this.featuredKpiBadgeLabel = `${percent} / ${amountStr} hoy`;
      })
    );
  }

  private getAllOtherKpis(): Observable<KPI[]> {
    return this.kpiService.getAllKpis().pipe(
      tap(() => this.loading = false)
    );
  }

  public toggleShowAll(): void {
    this.showAll = !this.showAll;
  }
}
