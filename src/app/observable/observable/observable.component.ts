import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styles: [
  ]
})
export class ObservableComponent implements AfterViewInit, OnDestroy {
  @ViewChild('printdata') printdataElement: ElementRef;
  private obs: Observable<any>;
  private obs2: Observable<string>;
  private sub1: Subscription;
  private sub2: Subscription;
  private sub3: Subscription;
  private sub4: Subscription;


  constructor(private _designUtility: DesignUtilitiesService) {
    this.obs = <any>new Observable(obj => {
        obj.next(Math.random());
        obj.next(Math.random());
      }
    );

    this.obs2 = <any>new Observable(obj => {
      obj.next('done 1');
      obj.next('done 2');
      obj.next('done 3');
    }
  );
  }

  ngAfterViewInit(): void {
    this.sub1 = this.obs.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `subscriber 1 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `=========================`);

    this.sub2 = this.obs.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `subscriber 2 => ${data}`);
    });


    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `subscriber without filtered data`);

    this.sub3 = this.obs2.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `subscriber 1 => ${data}`);
    })

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `subscriber with filtered data`);
      
    this.sub4 = this.obs2.pipe(
      filter(d => d == 'done 3')
    ).subscribe(data => {
      this._designUtility.printData(this.printdataElement, `subscriber 2 => ${data}`);
    })
  }

  ngOnDestroy(): void {
      this.sub1.unsubscribe();
      this.sub2.unsubscribe();
      this.sub3.unsubscribe();
      this.sub4.unsubscribe();
  }
}
