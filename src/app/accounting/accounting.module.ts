import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { CapitalWidgetComponent } from './components/capital-widget/capital-widget.component';
import { NetIncomeWidgetComponent } from './components/net-income-widget/net-income-widget.component';
import { AccountingFeatureToggleDirective } from './directives/accounting-feature-toggle.directive';
import { AdminComponent } from './components/admin/admin.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountingComponent,
    CapitalWidgetComponent,
    NetIncomeWidgetComponent,
    AccountingFeatureToggleDirective,
    AdminComponent
  ],
  imports: [CommonModule, FormsModule, FontAwesomeModule, NgbModule, AccountingRoutingModule],
  entryComponents: [AdminComponent]
})
export class AccountingModule {}
