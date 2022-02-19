import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Component({
  selector: 'app-behaviorsubject',
  templateUrl: './behaviorsubject.component.html',
  styles: [
  ]
})
export class BehaviorsubjectComponent implements AfterViewInit, OnDestroy {
  private objSubject: Subject<any>;
  private objBsubject: BehaviorSubject<any>;
  @ViewChild('printdata') printdataElement: ElementRef;

  constructor(private _designUtility: DesignUtilitiesService) {
    this.objSubject = new Subject<any>();
    this.objBsubject = new BehaviorSubject<any>(200);

  }

  ngAfterViewInit(): void {
    this.objSubject.subscribe(data => {
      console.log(`Subject subscriber 1 ${data}`);
      this._designUtility.printData(this.printdataElement, `Subject subscriber 1 => ${data}`);
    });

    this.objSubject.next(50);

    this.objSubject.subscribe(data => {
      console.log(`Subject subscriber 2 ${data}`)
      this._designUtility.printData(this.printdataElement, `Subject subscriber 1 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `BehaviorSubject subscriber without next method`);

    this.objBsubject.subscribe(data=>{
      console.log(`BehaviorSubject subscriber 1 ${data}`)
      this._designUtility.printData(this.printdataElement, `BehaviorSubject subscriber 1 => ${data}`);
    })

    // below line will send value again to above subscriber , try with commenting/uncommenting it
    this.objBsubject.next('400 after subscription through Next method');

  }

  ngOnDestroy(): void {
    this.objSubject.unsubscribe();
    this.objBsubject.unsubscribe();
  }

}
