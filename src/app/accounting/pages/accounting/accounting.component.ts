import { Component, OnInit } from '@angular/core';
import { AccountingFeatureService } from 'src/app/accounting/services/accounting-feature.service';
import { Observable } from 'rxjs';
import { AccountingFeature } from '../../models/accounting-feature.model';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {
  allFeatures$: Observable<AccountingFeature[]>;

  constructor(private featureService: AccountingFeatureService) {}

  ngOnInit() {
    this.allFeatures$ = this.featureService.getAllFeatures();
  }
}
