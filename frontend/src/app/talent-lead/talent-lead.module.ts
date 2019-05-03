import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
//import { TalentService } from './talent.service';
import { TestComponent } from '../components/test/test.component';
import { TalentLeadRoutingModule } from './talent-lead-routing.module';

@NgModule({
    declarations: [
        TestComponent
      ],
    //providers: [TalentLeadService],
    imports: [CommonModule, TalentLeadRoutingModule],
})
export class TalentLeadModule {}