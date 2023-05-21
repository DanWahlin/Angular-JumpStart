import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { TrackByService } from 'src/app/core/services/trackby.service';
import { RouterTestingModule } from '@angular/router/testing';
import { customers } from '../app/shared/mocks';
import { CustomersCardComponent } from 'src/app/customers/customers-card/customers-card.component';

export default {
  title: 'Example/Customer Cards',
  component: CustomersCardComponent,
  decorators: [
    moduleMetadata({
      imports: [ CommonModule, RouterTestingModule ],
      providers: [ TrackByService ]
    }),
  ],
} as Meta;

const Template: StoryFn<CustomersCardComponent> = (args: CustomersCardComponent) => ({
  component: CustomersCardComponent,
  props: args,
});

export const CustomerCards = Template.bind({});
CustomerCards.args = { customers };

export const CustomerCards10 = Template.bind({});
CustomerCards10.args = { customers: customers.slice(0,10) };

export const CustomerCards4 = Template.bind({});
CustomerCards4.args = { customers: customers.slice(0,4) };

export const CustomerCardsNone = Template.bind({});
CustomerCardsNone.args = { customers: [] };