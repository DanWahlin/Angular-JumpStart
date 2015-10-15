import { bootstrap, bind, FORM_PROVIDERS } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS } from 'angular2/http';
import { AppComponent } from './components/app/app-component';

bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    FORM_PROVIDERS,
    HTTP_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);
