import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Component({
  selector: 'app-aysncsubject',
  templateUrl: './aysncsubject.component.html',
  styles: [
  ]
})
export class AysncsubjectComponent implements AfterViewInit, OnDestroy {

  private objAsubject: AsyncSubject<any>;
  private objAsubject2: AsyncSubject<any>;

  @ViewChild('printdata') printdataElement: ElementRef;

  constructor(private _designUtility: DesignUtilitiesService) {
    this.objAsubject = new AsyncSubject();
    this.objAsubject.next('first value before subscription');
    this.objAsubject.next('second value before subscription');
    this.objAsubject.next('third value before subscription');
  }

  ngAfterViewInit(): void {
    this._designUtility.printData(this.printdataElement, `AsyncSubject will broad cast the value only if Complete method called`);

    this.objAsubject.subscribe(data => {
      console.log(`AsyncSubject subscriber 1 ${data}`);
      this._designUtility.printData(this.printdataElement, `AsyncSubject subscriber 1 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `calling complete method`);

    this.objAsubject.complete();

    this._designUtility.printData(this.printdataElement, `Emmitting New Value, but it wont work as Complete is called and last value is emmitted`);
    this.objAsubject.next('Fourth value before Complete');

  }

  ngOnDestroy(): void {

  }

}
