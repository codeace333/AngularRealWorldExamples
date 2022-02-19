import { Component } from '@angular/core';
import { SubcomponentsService } from 'src/app/_common/services/subcomponents.service';
import { Componentmodule } from 'src/app/_common/_models/componentmodule.model';

@Component({
  selector: 'app-services-home-page',
  templateUrl: './services-home-page.component.html',
  styles: [
  ]
})
export class ServicesHomePageComponent {

  parentRoute: string = 'Services'
  childCompModule: Array<Componentmodule>;

  constructor(private _subComp: SubcomponentsService) {
    this._subComp.arrmixSubComModule$.subscribe(data => {
      this.childCompModule = data[0]['children']
    });

    this._subComp.getChildComp(this.parentRoute);
  }

}
