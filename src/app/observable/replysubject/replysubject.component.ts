import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Component({
  selector: 'app-replysubject',
  templateUrl: './replysubject.component.html',
  styles: [
  ]
})
export class ReplysubjectComponent implements AfterViewInit, OnDestroy {

  private objRsubject: ReplaySubject<any>;
  private objRsubject2: ReplaySubject<any>;
  @ViewChild('printdata') printdataElement: ElementRef;

  constructor(private _designUtility: DesignUtilitiesService) {
    this.objRsubject = new ReplaySubject<any>();
    this.objRsubject.next('First Value Before Subscription');
    this.objRsubject.next('Second Value  Before Subscription');
    this.objRsubject.next('Third Value  Before Subscription');


    this.objRsubject2 = new ReplaySubject<any>(2);
    this.objRsubject2.next('First Value Before Subscription');
    this.objRsubject2.next('Second Value  Before Subscription');
    this.objRsubject2.next('Third Value  Before Subscription');

  }

  ngAfterViewInit(): void {

    this.objRsubject.subscribe(data => {
      console.log(`ReplaySubject subscriber 1 ${data}`);
      this._designUtility.printData(this.printdataElement, `ReplaySubject subscriber 1 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `=========================`);
    this.objRsubject.next('Fourth Value After Subscription');

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `Aded New Subscriber`);

    this.objRsubject.subscribe(data => {
      console.log(`ReplaySubject subscriber 2 ${data}`);
      this._designUtility.printData(this.printdataElement, `ReplaySubject subscriber 2 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `========== Example 2 with Buffer 2 ===============`);

    this.objRsubject2.subscribe(data => {
      console.log(`ReplaySubject subscriber 1 ${data}`);
      this._designUtility.printData(this.printdataElement, `ReplaySubject Example 2 - subscriber 1 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `========== Example 2 : with same buffer size 2 - same subsriber and emmitting new value ===============`);

    this.objRsubject2.next('Fourth Value After Subscription')


    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `========== Example 2 : with same buffer size 2 - New subsriber and emmitting new value ===============`);

    this.objRsubject2.subscribe(data => {
      console.log(`ReplaySubject subscriber 2 ${data}`);
      this._designUtility.printData(this.printdataElement, `ReplaySubject Example 2 - subscriber 2 => ${data}`);
    });
  }

  ngOnDestroy(): void {
    this.objRsubject.unsubscribe();
  }


}
