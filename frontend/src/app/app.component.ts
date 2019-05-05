import { Component, OnInit, OnDestroy } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { APP_SETTINGS } from './core/types/settings';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: any;
  loggedIn: boolean;
  userName: any;

  constructor(private adalSvc: MsAdalAngular6Service) {
    this.adalSvc.acquireToken(APP_SETTINGS.instance).subscribe((resToken: string) => {
      console.log(resToken);
    });
  }

  ngOnInit(): void {
    this.userName = this.adalSvc.LoggedInUserName;
  }
}
