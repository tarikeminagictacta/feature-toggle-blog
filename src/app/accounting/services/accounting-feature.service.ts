import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AccountingFeature } from '../models/accounting-feature.model';

@Injectable({
  providedIn: 'root'
})
export class AccountingFeatureService {
  constructor(private http: HttpClient) {}

  isFeatureEnabled(featureName: string): Observable<boolean> {
    return this.getAllFeatures().pipe(map(x => x.find(f => f.featureName === featureName).enabled));
  }

  getAllFeatures(): Observable<AccountingFeature[]> {
    return this.http.get<AccountingFeature[]>('/assets/data/accounting.features.json');
  }
}
