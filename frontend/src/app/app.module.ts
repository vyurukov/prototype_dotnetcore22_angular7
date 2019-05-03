import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MsalModule, MsalInterceptor, MsalGuard } from '@azure/msal-angular';
import { APP_SETTINGS } from './core/types/settings';
import { LogLevel } from 'msal';
import { DataService } from './core/services/data.service';
import { TestComponent } from './components/test/test.component';

export function loggerCallback(logLevel, message, piiEnabled) {
  console.log("auth client logging: " + message);
}

@NgModule({
    declarations: [
      AppComponent,
      //TestComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule,
        // MsalModule.forRoot({
        //   clientID: APP_SETTINGS.clientId,
        //   authority: APP_SETTINGS.instance + APP_SETTINGS.tenantId,
        //   validateAuthority: true,
        //   redirectUri: APP_SETTINGS.redirectUri,
        //   navigateToLoginRequestUrl: true,
        //   popUp: false,
        //   consentScopes: ["openid"],
        //   unprotectedResources: [],
        //   protectedResourceMap: [],
        //   cacheLocation: "localStorage",
        //   logger: loggerCallback,
        //   correlationId: "1000",
        //   // TODO: Error can be used for Production or Verbose for Development
        //   level: LogLevel.Info,
        //   piiLoggingEnabled: true
        // })
    ],
    
  providers: [
    // [DataService],
    // [MsalGuard],
    // // The MsalInterceptor below will attach the access token to every API call. If you want to exclude a token from being sent to a specific URL add the URL to the "unprotectedResources" list above
    // { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
  ],
    bootstrap: [AppComponent],
})
export class AppModule {}