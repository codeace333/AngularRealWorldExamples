import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  exports:[
    CardComponent,
    CommonModule,
    AngularMaterialModule,
    // HttpClientModule
  ]
})
export class SharedModule { }
