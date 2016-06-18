import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { Sorter } from './shared/utils/sorter';
import { DataService } from './shared/services/data.service';
import { TrackByService } from './shared/services/trackby.service';

export const APP_PROVIDERS = [
    Sorter,
    DataService,
    TrackByService,
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    //bind(LocationStrategy).toClass(HashLocationStrategy)
];