import { bind } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { FORM_PROVIDERS } from 'angular2/common';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { LocationStrategy, HashLocationStrategy } from 'angular2/platform/common';

import { DataService } from './shared/services/data.service';
import { TrackByService } from './shared/services/trackby.service';

export const APP_PROVIDERS = [
    DataService,
    TrackByService,
    FORM_PROVIDERS,
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];