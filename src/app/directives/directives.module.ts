import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivesRoutingModule } from './directives-routing.module';
import { SharedModule } from '../_common/shared/shared.module';
import { DirectivesHomePageComponent } from './components/directives-home-page/directives-home-page.component';
import { DirectiveExampleDirective } from './directives/directive-example.directive';
import { RainbowDirective } from './directives/rainbow.directive';


@NgModule({
  declarations: [DirectivesHomePageComponent, DirectiveExampleDirective, RainbowDirective],
  imports: [
    CommonModule,
    SharedModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
