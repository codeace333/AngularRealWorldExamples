import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AysncsubjectComponent } from './aysncsubject/aysncsubject.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { HttpobservableComponent } from './httpobservable/httpobservable.component';
import { ObservableHomePageComponent } from './observable-home-page/observable-home-page.component';
import { ObservableComponent } from './observable/observable.component';
import { ReplysubjectComponent } from './replysubject/replysubject.component';
import { SubjectComponent } from './subject/subject.component';


const routes: Routes = [
  {
    path:'',
    component: ObservableHomePageComponent,
    children: [
      {
        path:'observable',
        component: ObservableComponent
      },
      {
        path:'httpobservable',
        component: HttpobservableComponent
      },
      {
        path:'subject',
        component: SubjectComponent
      },
      {
        path:'behavioursubject',
        component: BehaviorsubjectComponent
      },
      {
        path:'replysubject',
        component: ReplysubjectComponent
      },
      {
        path:'asyncsubject',
        component: AysncsubjectComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservableRoutingModule { }
