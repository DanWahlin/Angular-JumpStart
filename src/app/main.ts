import { bootstrap } from 'angular2/platform/browser';

import { APP_PROVIDERS } from './shared/app.providers';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [ APP_PROVIDERS ]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
