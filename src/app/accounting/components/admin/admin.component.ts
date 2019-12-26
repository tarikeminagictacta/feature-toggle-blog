import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { AccountingFeature } from '../../models/accounting-feature.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  featureFlags$: Observable<AccountingFeature[]>;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
}
