import { Component } from '@angular/core';
import { Album } from 'src/app/album.model';
import { SubcomponentsService } from 'src/app/_common/services/subcomponents.service';
import { Componentmodule } from 'src/app/_common/_models/componentmodule.model';

@Component({
  selector: 'app-intercept-homepage',
  templateUrl: './intercept-homepage.component.html',
  styles: [
  ]
})
export class InterceptHomepageComponent {

  parentRoute: string = 'Intercept'
  albums: Album[];
  childCompModule: Array<Componentmodule>;

  constructor(private _subComp: SubcomponentsService) {
    this._subComp.arrmixSubComModule$.subscribe(data => {
      this.childCompModule = data[0]['children']
    });

    this._subComp.getChildComp(this.parentRoute);
  }

 
}
