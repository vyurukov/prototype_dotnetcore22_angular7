import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './notfound/notfound.component';
import { MsalGuard } from '@azure/msal-angular';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'talent',
        pathMatch: 'full'
    },
    {
        path: 'talent',
        canActivate: [MsalGuard],
        loadChildren: '../talent/talent.module#TalentModule'
    },
    {
        path: 'talent-lead',
        canActivate: [MsalGuard],
        loadChildren: '../talent-lead/talent-lead.module#TalentLeadModule'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
      providers: [
        [MsalGuard]
      ],
})
export class CoreRoutingModule { }