import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservableRoutingModule } from './observable-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { HttpobservableComponent } from './httpobservable/httpobservable.component';
import { SubjectComponent } from './subject/subject.component';
import { ReplysubjectComponent } from './replysubject/replysubject.component';
import { BehaviorsubjectComponent } from './behaviorsubject/behaviorsubject.component';
import { AysncsubjectComponent } from './aysncsubject/aysncsubject.component';
import { SharedModule } from '../_common/shared/shared.module';
import { ObservableHomePageComponent } from './observable-home-page/observable-home-page.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ObservableComponent, HttpobservableComponent, SubjectComponent, ReplysubjectComponent, BehaviorsubjectComponent, AysncsubjectComponent, ObservableHomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ObservableRoutingModule,
    HttpClientModule
  ]
})
export class ObservableModule { }
