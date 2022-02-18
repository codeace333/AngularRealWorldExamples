import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

 const MaterialModules =[
   MatCardModule,
    MatButtonModule
 ];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModules
  ],
  exports:[
    MaterialModules
  ]
})
export class AngularMaterialModule { }
