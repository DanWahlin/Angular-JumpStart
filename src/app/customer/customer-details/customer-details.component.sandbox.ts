import { sandboxOf } from 'angular-playground';
import { DataService } from '../../core/services/data.service';
import { CustomerDetailsComponent } from './customer-details.component';
import { MockDataService, MockActivatedRoute, getActivatedRouteWithParent } from '../../shared/mocks';
import { ActivatedRoute } from '@angular/router';

const sandboxConfig = {
  providers: [
      { provide: DataService, useClass: MockDataService },
      { provide: ActivatedRoute, useFactory: () => {
        const route = getActivatedRouteWithParent([{ id: '1' }]);
        return route;
      }}
  ],
  label: 'Customer Details Component'
};

export default sandboxOf(CustomerDetailsComponent, sandboxConfig)
  .add('With a Customer', {
    template: `<cm-customer-details></cm-customer-details>`
  })
  .add('Without a Customer', {
    template: `<cm-customer-details></cm-customer-details>`,
    providers: [
      { provide: ActivatedRoute, useFactory: () => {
        const route = getActivatedRouteWithParent([{ id: null }]);
        return route;
      }}
    ]
  });
