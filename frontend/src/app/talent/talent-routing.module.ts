import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent} from '../components/test/test.component'
import { MsalGuard, MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import { APP_SETTINGS } from '../core/types/settings';
import { LogLevel } from 'msal';
import { DataService } from '../core/services/data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log("auth client logging: " + message);
  }

const routes: Routes = [
    { path: '', canActivate: [MsalGuard], component: TestComponent},

];

@NgModule({
    declarations: [
        TestComponent
      ],
    exports: [RouterModule],
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
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
        //  [DataService],
        //   [MsalGuard],
        //   // The MsalInterceptor below will attach the access token to every API call. If you want to exclude a token from being sent to a specific URL add the URL to the "unprotectedResources" list above
        //   { provide: HTTP_INTERCEPTORS, useClass: MsalInterceptor, multi: true },
        ],
})
export class TalentRoutingModule { }