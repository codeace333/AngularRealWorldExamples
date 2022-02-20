import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SharedModule } from './_common/shared/shared.module';
import { RoutingdemoModule } from './routingdemo/routingdemo.module';
import { AppRoutingModule } from './_common/app-routing.module';
import { HomeComponent } from './_common/components/home/home.component';
import { ObservableModule } from './observable/observable.module';
import { WihtoutprovideinService } from './services/services/wihtoutprovidein.service';
import { AppmoduleAndServicemoduleService } from './services/services/appmodule-and-servicemodule.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpinterceptorInterceptor } from './intercept/custom-httpinterceptor.interceptor';
import { GlobalErrorHandlerInterceptorInterceptor } from './intercept/global-error-handler-interceptor.interceptor';
import { HeaderComponent } from './_common/components/header/header.component';
import { HeaderErrorHandlerComponent } from './_common/components/header-error-handler/header-error-handler.component';
import { AlertModule } from 'ngx-bootstrap/alert';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HeaderErrorHandlerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RoutingdemoModule,
    ObservableModule,
    AlertModule.forRoot()
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: HTTP_INTERCEPTORS, useClass: CustomHttpinterceptorInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS, useClass: GlobalErrorHandlerInterceptorInterceptor, multi:true},
    WihtoutprovideinService,
    AppmoduleAndServicemoduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    
  }
 }
