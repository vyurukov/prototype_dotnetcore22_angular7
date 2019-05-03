import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { APP_SETTINGS } from './app/core/types/settings';
import { AppModule } from './app/app.module';

APP_SETTINGS.instance = "https://login.microsoftonline.com/";
APP_SETTINGS.tenantId = "f2d6f0c4-6853-4a0d-adc2-6c9a01566442";
APP_SETTINGS.clientId = "51516284-d004-4151-9816-397162701253";
APP_SETTINGS.redirectUri = "http://localhost:4200/";
APP_SETTINGS.baseUrl = "https://localhost:44343";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// fetch('http://localhost:5858/api/settings/get')
// .then(res => res.json())
// .then(settings => {
//   console.log(`Settings from API (settings): `, settings);
  
//   APP_SETTINGS.instance = settings[0].value;
//   APP_SETTINGS.tenantId = settings[1].value;
//   APP_SETTINGS.clientId = settings[2].value;
//   APP_SETTINGS.redirectUri = settings[3].value;
//   APP_SETTINGS.baseUrl = settings[4].value;

  

//   console.log(`APP_SETTINGS: `, APP_SETTINGS);
// })
// .then(_ => import('./app/app.module'))
// .then(({AppModule}) => {
//   platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
// });