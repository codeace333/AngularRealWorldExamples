import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component:HomeComponent
  },
  {
    path: 'routing',
    loadChildren: () => import('../routingdemo/routingdemo.module').then(m => m.RoutingdemoModule)
  },
  {
    path: 'observables',
    loadChildren: () => import('../observable/observable.module').then(m => m.ObservableModule)
  },
  {
    path: 'promises',
    loadChildren: () => import('../promises/promises.module').then(m => m.PromisesModule)
  },
  {
    path: 'services',
    loadChildren: () => import('../services/services.module').then(m => m.ServicesModule)
  },
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules,
    relativeLinkResolution: 'legacy',
  //  enableTracing: true
    })
],
  exports: [RouterModule]
})
export class AppRoutingModule {}
