import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingsubcompComponent } from './routingsubcomp.component';
import { ChildrencomponentsComponent } from './subcomponents/childrencomponents/childrencomponents.component';
import { NestedroutingComponent } from './subcomponents/nestedrouting/nestedrouting.component';

const routes: Routes = [
    {
        path: '',
        component: RoutingsubcompComponent,
        children: [
            {
                path: 'children',
                component: ChildrencomponentsComponent
            },
            {
                path: 'nestedrouting',
                component: NestedroutingComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RoutingDemoRoutingModule { }
