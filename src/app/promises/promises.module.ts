import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromisesRoutingModule } from './promises-routing.module';
import { PromisesHomePageComponent } from './promises-home-page/promises-home-page.component';
import { PromisesExampleComponent } from './promises-example/promises-example.component';
import { SharedModule } from '../_common/shared/shared.module';


@NgModule({
  declarations: [PromisesHomePageComponent, PromisesExampleComponent],
  imports: [
    CommonModule,
    PromisesRoutingModule,
    SharedModule,
  ]
})
export class PromisesModule { }
