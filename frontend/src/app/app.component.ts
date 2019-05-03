import { Component, OnInit, OnDestroy } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: any;
  loggedIn: boolean;
  user: any;

  constructor(
    private broadcastService: BroadcastService,
    private authService: MsalService
    ) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.subscription = this.broadcastService.subscribe("msal:loginSuccess", 
      (payload) => {
        console.log("login success " + JSON.stringify(payload));    
        this.loggedIn = true;
        this.user = this.authService.getUser();
      });  
  }
  
  ngOnDestroy() {
   // disconnect from broadcast service on component destroy
   this.broadcastService.getMSALSubject().next(1);
   if (this.subscription) {
     this.subscription.unsubscribe();
   }
  }

}
