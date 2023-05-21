import { sandboxOf } from 'angular-playground';
import { AboutComponent } from './about.component';

const sandboxConfig = {
  imports: [AboutComponent]
}

export default sandboxOf(AboutComponent, sandboxConfig)
  .add('About Component', {
    template: `<cm-about></cm-about>`
  });
