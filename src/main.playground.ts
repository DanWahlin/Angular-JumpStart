import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';

PlaygroundModule
  .configure({
      selector: 'cm-app-component',
      overlay: false,
      modules: []
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
