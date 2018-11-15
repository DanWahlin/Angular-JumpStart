import { RouterTestingModule } from '@angular/router/testing';
import { sandboxOf } from 'angular-playground';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersCardComponent } from './customers-card/customers-card.component';
import { CustomersGridComponent } from './customers-grid/customers-grid.component';
import { CoreModule } from '../core/core.module';
import { customers, MockDataService } from '../shared/mocks';
import { DataService } from '../core/services/data.service';

const sandboxConfig = {
  imports: [ SharedModule, CoreModule, RouterTestingModule ],
  declarations: [ CustomersCardComponent, CustomersGridComponent ],
  providers: [
    { provide: DataService, useClass: MockDataService }
],
  label: 'Customers Component'
};

export default sandboxOf(CustomersComponent, sandboxConfig)
  .add('With Customers', {
    template: `<cm-customers></cm-customers>`
  });
