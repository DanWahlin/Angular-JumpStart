import { sandboxOf } from 'angular-playground';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { DataService } from '../../core/services/data.service';
import { CustomerOrdersComponent } from './customer-orders.component';
import { MockDataService, MockActivatedRoute, getActivatedRouteWithParent } from '../../shared/mocks';
import { ActivatedRoute } from '@angular/router';

const sandboxConfig = {
  imports: [ SharedModule, CoreModule ],
  providers: [
      { provide: DataService, useClass: MockDataService },
      { provide: ActivatedRoute, useFactory: () => {
        const route = getActivatedRouteWithParent([{ id: '1' }]);
        return route;
      }}
  ],
  label: 'Customer Orders Component'
};

export default sandboxOf(CustomerOrdersComponent, sandboxConfig)
  .add('With Orders', {
    template: `<cm-customer-orders></cm-customer-orders>`
  })
  .add('Without Orders', {
    template: `<cm-customer-orders></cm-customer-orders>`,
    providers: [ { provide: ActivatedRoute, useFactory: () => {
      const route = getActivatedRouteWithParent([{ id: null }]);
      return route;
    }}]
  });
