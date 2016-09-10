import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';

//enableProdMode(); //Uncomment for production
platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => console.log('App bootstrapped'))
  .catch(err => console.error(err));
