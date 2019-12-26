import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { AccountingFeature } from '../models/accounting-feature.model';

@Injectable({
  providedIn: 'root'
})
export class AccountingFeatureService {
  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: StorageService) {}

  isFeatureEnabled(featureName: string): Observable<boolean> {
    return this.getAllFeatures().pipe(map(x => x.find(f => f.featureName === featureName).enabled));
  }

  getAllFeatures(): Observable<AccountingFeature[]> {
    const key = 'accounting-feature';
    const result: AccountingFeature[] = this.storage.get(key);
    if (!result) {
      return this.http
        .get<AccountingFeature[]>('/assets/data/accounting.features.json')
        .pipe(tap(x => this.storage.set(key, x)));
    } else {
      return of(result);
    }
  }
}
