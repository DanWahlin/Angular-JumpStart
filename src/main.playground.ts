import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

initializePlayground('cm-app-component');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);