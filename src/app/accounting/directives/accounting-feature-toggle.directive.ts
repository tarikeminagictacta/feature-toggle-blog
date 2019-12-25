import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { AccountingFeatureService } from '../services/accounting-feature.service';

@Directive({
  selector: '[appAccountingFeatureToggle]'
})
export class AccountingFeatureToggleDirective implements OnChanges {
  private hasView = false;

  @Input('appAccountingFeatureToggle')
  featureName: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private featureService: AccountingFeatureService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.shouldRender();
  }

  private shouldRender(): any {
    this.featureService.isFeatureEnabled(this.featureName).subscribe(
      enabled => {
        if (enabled) {
          if (!this.hasView) {
            this.enableFeature();
          }
        } else {
          this.disableFeature();
        }
      },
      error => this.disableFeature()
    );
  }

  private enableFeature() {
    this.viewContainer.createEmbeddedView(this.templateRef);
    this.hasView = true;
  }

  private disableFeature() {
    this.viewContainer.clear();
    this.hasView = false;
  }
}
