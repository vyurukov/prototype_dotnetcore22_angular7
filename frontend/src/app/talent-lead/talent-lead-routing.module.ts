import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TestComponent} from '../components/test/test.component'


const routes: Routes = [
    { path: '', component: TestComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class TalentLeadRoutingModule { }