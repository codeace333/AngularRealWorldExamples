import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootInjectExampleComponent } from './root-inject-example/root-inject-example.component';
import { ServicesHomePageComponent } from './services-home-page/services-home-page.component';


const routes: Routes = [
  {
    path:'',
    component: ServicesHomePageComponent,
    children: [
      {
        path:'',
        redirectTo:'servicesexamples',
        pathMatch:'full'
      },
      {
        path:'servicesexamples',
        component: RootInjectExampleComponent
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
