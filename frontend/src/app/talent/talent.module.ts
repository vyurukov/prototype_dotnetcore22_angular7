import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { TalentService } from './talent.service';
import { TestComponent } from '../components/test/test.component';
import { TalentRoutingModule } from './talent-routing.module';
import { MsalModule, MsalGuard, MsalInterceptor } from '@azure/msal-angular';
import { APP_SETTINGS } from '../core/types/settings';
import { LogLevel } from 'msal';
import { DataService } from '../core/services/data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
    declarations: [
        //TestComponent
      ],
    //providers: [TalentService],
    imports: [
      CommonModule, 
      TalentRoutingModule,
    ]
})
export class TalentModule {}