import { bind } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { DataService } from './services/data.service';

export const APP_PROVIDERS = [
    DataService,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];