import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';
import { KPI } from '../../shared/models/kpi.model';

@Injectable({
  providedIn: 'root',
})
export class KpiService {
  private readonly apiService = inject(ApiService);
  private readonly featuredKpiId = '1';

  getFeaturedKpi(): Observable<KPI> {
    return this.apiService.get<KPI>(`/kpis/${this.featuredKpiId}`);
  }

  getAllKpis(): Observable<KPI[]> {
    return this.apiService.get<KPI[]>('/kpis').pipe(
      map((kpis) =>
        kpis
          .filter((kpi) => kpi.id !== this.featuredKpiId)
      )
    );
  }
}
