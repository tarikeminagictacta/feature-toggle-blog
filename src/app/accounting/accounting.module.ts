import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './pages/accounting/accounting.component';
import { CapitalWidgetComponent } from './components/capital-widget/capital-widget.component';
import { NetIncomeWidgetComponent } from './components/net-income-widget/net-income-widget.component';
import { AccountingFeatureToggleDirective } from './directives/accounting-feature-toggle.directive';

@NgModule({
  declarations: [AccountingComponent, CapitalWidgetComponent, NetIncomeWidgetComponent, AccountingFeatureToggleDirective],
  imports: [CommonModule, AccountingRoutingModule]
})
export class AccountingModule {}
