import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterceptHomepageComponent } from './intercept-homepage/intercept-homepage.component';
import { InterceptTokenComponent } from './intercept-token/intercept-token.component';


const routes: Routes = [
  {
    path:'',
    component: InterceptHomepageComponent,
    children: [
      {
        path:'',
        redirectTo:'interceptToken',
        pathMatch:'full'
      },
      {
        path:'interceptToken',
        component: InterceptTokenComponent
      },
      
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterceptRoutingModule { }
