import { importProvidersFrom } from '@angular/core';
import { withInterceptorsFromDi, provideHttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app/routes';
import { PreloadModulesStrategy } from './app/core/strategies/preload-modules.strategy';
import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import { OverlayRequestResponseInterceptor } from './app/core/overlay/overlay-request-response.interceptor';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule,
      RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadModulesStrategy })),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OverlayRequestResponseInterceptor,
      multi: true,
    },
    { provide: 'Window', useFactory: () => window },
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ]
})
  .catch(err => console.error(err));
