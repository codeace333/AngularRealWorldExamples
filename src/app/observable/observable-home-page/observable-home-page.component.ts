import { Component} from '@angular/core';
import { SubcomponentsService } from 'src/app/_common/services/subcomponents.service';
import { Componentmodule } from 'src/app/_common/_models/componentmodule.model';

@Component({
  selector: 'app-observable-home-page',
  templateUrl: './observable-home-page.component.html',
  styles: [
  ]
})
export class ObservableHomePageComponent{

  parentRoute: string = 'observables'
  childCompModule: Array<Componentmodule>;

  constructor(private _subComp: SubcomponentsService) {
    this._subComp.arrmixSubComModule$.subscribe(data => {
      this.childCompModule = data[0]['children']
    });

    this._subComp.getChildComp(this.parentRoute);
  }

}
