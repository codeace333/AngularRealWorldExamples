import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesExampleComponent } from './promises-example/promises-example.component';
import { PromisesHomePageComponent } from './promises-home-page/promises-home-page.component';


const routes: Routes = [
  {
    path:'',
    component: PromisesHomePageComponent,
    children: [
      {
        path:'',
        redirectTo:'promise',
        pathMatch:'full'
      },
      {
        path:'promise',
        component: PromisesExampleComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromisesRoutingModule { }
