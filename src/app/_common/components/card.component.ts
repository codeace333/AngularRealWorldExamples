import { Component, Input, OnChanges,  SimpleChanges} from '@angular/core';
import { Componentmodule } from '../_models/componentmodule.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnChanges {
  @Input() arrmixLists: Array<Componentmodule>;
  constructor() { 
    console.log('this.arrmixLists CardComponent')
    console.log(this.arrmixLists)
  }
  
  ngOnChanges(_changes: SimpleChanges){
    console.log('_changes');
    console.log(_changes);
  }

}
