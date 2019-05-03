import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_SETTINGS } from './types/settings';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalGuard, MsalInterceptor, MsalModule } from '@azure/msal-angular';
import { LogLevel } from 'msal';

// components
import { CoreRoutingModule } from './core-routing.module';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { NotFoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { TalentRoutingModule } from '../talent/talent-routing.module';
import { TestComponent } from '../components/test/test.component';

// Services
export function loggerCallback(logLevel, message, piiEnabled) {
  console.log("auth client logging: " + message);
}

// @see https://angular.io/guide/styleguide#core-feature-module
// @see https://www.technouz.com/4772/angular-6-app-structure-with-multiple-modules/

@NgModule({
  declarations: [
    NotFoundComponent, 
    //TestComponent
  ],
  imports: [
    CoreRoutingModule,
    CommonModule, 
      TalentRoutingModule,
      MsalModule.forRoot({
        clientID: APP_SETTINGS.clientId,
        authority: APP_SETTINGS.instance + APP_SETTINGS.tenantId,
        validateAuthority: true,
        redirectUri: APP_SETTINGS.redirectUri,
        navigateToLoginRequestUrl: true,
        popUp: false,
        consentScopes: ["openid"],
        unprotectedResources: [],
        protectedResourceMap: [ ['https://localhost:44343/', ['user.read']] ],
        cacheLocation: "localStorage",
        logger: loggerCallback,
        correlationId: "1000",
        // TODO: Error can be used for Production or Verbose for Development
        level: LogLevel.Info,
        piiLoggingEnabled: true
      })
    ],
      providers: [
        [DataService],
        [MsalGuard],
        // The MsalInterceptor below will attach the access token to every API call. If you want to exclude a token from being sent to a specific URL add the URL to the "unprotectedResources" list above
        { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
      ],
  exports:[RouterModule]
})
export class CoreModule { }
// export class CoreModule {
//   constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
//       throwIfAlreadyLoaded(parentModule, 'CoreModule');
//   }
// }
