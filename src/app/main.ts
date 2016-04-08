import { bootstrap } from 'angular2/platform/browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';

bootstrap(AppComponent, [ APP_PROVIDERS ]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
