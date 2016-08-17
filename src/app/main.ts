import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

//enableProdMode(); //Uncomment for production
platformBrowserDynamic().bootstrapModule(AppModule);
