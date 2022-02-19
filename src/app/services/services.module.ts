import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesHomePageComponent } from './services-home-page/services-home-page.component';
import { RootInjectExampleComponent } from './root-inject-example/root-inject-example.component';
import { SharedModule } from '../_common/shared/shared.module';
import { ServicemoduleonlyService } from './services/servicemoduleonly.service';
import { AppmoduleAndServicemoduleService } from './services/appmodule-and-servicemodule.service';


@NgModule({
  declarations: [ServicesHomePageComponent, RootInjectExampleComponent],
  imports: [
    CommonModule,
    SharedModule,
    ServicesRoutingModule
  ],
  providers:[
    ServicemoduleonlyService,
    AppmoduleAndServicemoduleService
  ]
})
export class ServicesModule { }
