import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent} from '../components/test/test.component'
import { CommonModule } from '@angular/common';
import { APP_SETTINGS } from '../core/types/settings';
import { LogLevel } from 'msal';
import { DataService } from '../core/services/data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

export function loggerCallback(logLevel, message, piiEnabled) {
    console.log("auth client logging: " + message);
  }

const routes: Routes = [
    { path: '', canActivate: [AuthenticationGuard], component: TestComponent},

];

@NgModule({
    declarations: [
        TestComponent
      ],
    exports: [RouterModule],
    imports: [
        CommonModule, 
        RouterModule.forChild(routes),
    ],
        providers: [
           [AuthenticationGuard],
        ],
})
export class TalentRoutingModule { }