import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_SETTINGS } from './types/settings';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
// components
import { CoreRoutingModule } from './core-routing.module';
import { throwIfAlreadyLoaded } from './module-import.guard';
import { NotFoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';
import { TalentRoutingModule } from '../talent/talent-routing.module';
import { getAdalConfig } from './function-get.adal-config';

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
      MsAdalAngular6Module.forRoot(getAdalConfig),
    ],
      providers: [
        [DataService]
      ],
  exports:[RouterModule]
})
// export class CoreModule { }
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
      throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
