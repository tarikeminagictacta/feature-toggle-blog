import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { AccountingFeature } from '../../models/accounting-feature.model';
import { AccountingFeatureService } from '../../services/accounting-feature.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from '../../components/admin/admin.component';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {
  faCog = faCog;
  allFeatures$: Observable<AccountingFeature[]>;

  constructor(private featureService: AccountingFeatureService, private modalService: NgbModal) {}

  ngOnInit() {
    this.allFeatures$ = this.featureService.getAllFeatures();
  }

  openFeatureSettings() {
    const modalRef = this.modalService.open(AdminComponent);
    modalRef.componentInstance.featureFlags$ = this.allFeatures$;
  }
}
