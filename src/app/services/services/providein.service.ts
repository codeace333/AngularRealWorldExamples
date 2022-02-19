import { Injectable } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Injectable({
  providedIn: 'root'
})
export class ProvideinService {

  constructor(private _designUtility : DesignUtilitiesService) {
    
   }

  printData(element, value) {
    this._designUtility.printData(element, value)
  }
}
