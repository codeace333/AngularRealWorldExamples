import { Component } from '@angular/core';
import { SubcomponentsService } from '../_common/services/subcomponents.service';
import { Componentmodule } from '../_common/_models/componentmodule.model';

@Component({
  selector: 'app-routingsubcomp',
  templateUrl: './routingsubcomp.component.html',
  styleUrls: ['./routingsubcomp.component.css']
})
export class RoutingsubcompComponent {

  parentRoute: string = 'routing'
  childCompModule: Array<Componentmodule>;

  constructor(private _subComp: SubcomponentsService) {
    this._subComp.arrmixSubComModule$.subscribe(data => this.childCompModule = data[0]['children']);
    this._subComp.getChildComp(this.parentRoute);
  }

  

}
