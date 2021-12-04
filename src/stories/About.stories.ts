import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';

import { AboutComponent } from '../app/about/about.component';

export default {
  title: 'Example/About',
  component: AboutComponent,
  decorators: [
    moduleMetadata({
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<AboutComponent> = (args: AboutComponent) => ({
  component: AboutComponent,
  props: args,
});

export const About = Template.bind({});
About.args = {};
