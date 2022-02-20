import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirectivesHomePageComponent } from './components/directives-home-page/directives-home-page.component';


const routes: Routes = [
  {
    path:'',
    component: DirectivesHomePageComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivesRoutingModule { }
