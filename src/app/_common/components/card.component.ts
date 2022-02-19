import { Component, Input} from '@angular/core';
import { Componentmodule } from '../_models/componentmodule.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent{
  @Input() arrmixLists: Array<Componentmodule>;
  constructor() { 
  }
  
}
