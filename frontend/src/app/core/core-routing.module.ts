import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './notfound/notfound.component';
import { AuthenticationGuard } from 'microsoft-adal-angular6';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'talent',
        pathMatch: 'full'
    },
    {
        path: 'talent',
        canActivate: [AuthenticationGuard],
        loadChildren: '../talent/talent.module#TalentModule'
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
        [AuthenticationGuard]
      ],
})
export class CoreRoutingModule { }