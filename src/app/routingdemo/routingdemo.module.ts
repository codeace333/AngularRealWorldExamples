import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingsubcompComponent } from './routingsubcomp.component';
import { RoutingDemoRoutingModule } from './routingdemo-routing.module';
import { ChildrencomponentsComponent } from './subcomponents/childrencomponents/childrencomponents.component';
import { ChildrenroutingComponent } from './subcomponents/childrenrouting/childrenrouting.component';
import { SharedModule } from '../_common/shared/shared.module';
import { NestedroutingComponent } from './subcomponents/nestedrouting/nestedrouting.component';
// import { CardComponent } from '../_common/components/card.component';


@NgModule({
  declarations: [
    RoutingsubcompComponent,
    ChildrencomponentsComponent,
    ChildrenroutingComponent,
    NestedroutingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingDemoRoutingModule,
  ]
})
export class RoutingdemoModule {
  constructor(){
  }
 }
