import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterceptRoutingModule } from './intercept-routing.module';
import { InterceptTokenComponent } from './intercept-token/intercept-token.component';
import { InterceptHomepageComponent } from './intercept-homepage/intercept-homepage.component';
import { SharedModule } from '../_common/shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpinterceptorInterceptor } from './custom-httpinterceptor.interceptor';


@NgModule({
  declarations: [InterceptTokenComponent, InterceptHomepageComponent],
  imports: [
    CommonModule,
    SharedModule,
    InterceptRoutingModule
  ],
  providers:[
    //{provide: HTTP_INTERCEPTORS, useClass: CustomHttpinterceptorInterceptor, multi:true}, -- Not working, Need to Register only in app.module
  ]
})
export class InterceptModule { }
