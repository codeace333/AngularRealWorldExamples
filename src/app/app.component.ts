import { Component, OnInit } from '@angular/core';
import { AppmoduleAndServicemoduleService } from './services/services/appmodule-and-servicemodule.service';
import { SubcomponentsService } from './_common/services/subcomponents.service';
import { Componentmodule } from './_common/_models/componentmodule.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coder';
  arrmixComponentLists: Array<Componentmodule>;

   constructor(private _subComp: SubcomponentsService, private _appModuleAndServiceModule : AppmoduleAndServicemoduleService) {
    this.arrmixComponentLists =this._subComp.getAllComModule();
  }

  
  ngOnInit(){

  }
}
