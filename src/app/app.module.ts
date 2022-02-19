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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RoutingdemoModule,
    ObservableModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    
  }
 }
