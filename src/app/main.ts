import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

bootstrap(AppComponent,[ 
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
.then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
