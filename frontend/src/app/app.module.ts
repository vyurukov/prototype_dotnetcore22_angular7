import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CoreModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}