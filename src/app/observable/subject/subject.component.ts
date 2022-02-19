import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: [
  ]
})
export class SubjectComponent implements AfterViewInit {

  @ViewChild('printdata') printdataElement: ElementRef;
  private obs: Observable<any>;
  private objSubject: Subject<any>;
  private sub1: Subscription;
  private sub2: Subscription;

  constructor(private _designUtility: DesignUtilitiesService) {
    this.obs = <any>new Observable(obj => {
      obj.next(Math.random());
      obj.next(Math.random());
    }
    );

    this.objSubject = new Subject<number>();

    /*let ob = <any>new Observable();
    ob.next('value');
    ob.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `Simple Observable => ${data}`);
    })

     Uncaught (in promise): TypeError: ob.next is not a function TypeError: ob.next is not a function
    */
  }

  ngAfterViewInit(): void {
    this.sub1 = this.obs.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `Observable subscriber 1 => ${data}`);
    });

    this.sub2 = this.obs.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `Observable subscriber 1 => ${data}`);
    });

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `Subject are multicast thats why both subscriber got the same value.`);

    this.objSubject.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `Subject subscriber 1 => ${data}`);
    });

    this.objSubject.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `Subject subscriber 2 => ${data}`);
    });

    this.objSubject.next(Math.random())

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `Once the subject broadcast value and if after that any new subscriber added, he will not get any value untill next broadcast`);
    this._designUtility.printData(this.printdataElement, ` Added New Subscriber, But doesn't get called`);
    
    this.objSubject.subscribe(data => {
      this._designUtility.printData(this.printdataElement, `Subject subscriber 3 => ${data}`);
    });

    // if below line uncommented it will broad cast to all 3 subscribers
    //this.obs2.next(Math.random())

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `Subject can Behave as data provider as well as consumer`);
    this._designUtility.printData(this.printdataElement, `Subject Example as Consumer`);

    // first we will create code for observable http request
    let data = ajax('https://jsonplaceholder.typicode.com/users');

    data.subscribe(d => {
      this._designUtility.printData(this.printdataElement, `Ajax Subscriber (users) 1 data ${d}`);
    })

    data.subscribe(d => {
      this._designUtility.printData(this.printdataElement, `Ajax Subscriber (users) 2 data ${d}`);
    })

    // above code will trigger 2 ajax request

    this._designUtility.printData(this.printdataElement, `=========================`);
    this._designUtility.printData(this.printdataElement, `above code will trigger 2 ajax request ( Check Code and network in console, Users api will get call twice )`);

    let data2 = ajax('https://jsonplaceholder.typicode.com/posts');
    let sub = new Subject();

    sub.subscribe(d => {
      this._designUtility.printData(this.printdataElement, `Ajax Subscriber (post api ) 1 data ${d}`);
    })

    sub.subscribe(d => {
      this._designUtility.printData(this.printdataElement, `Ajax Subscriber (post api ) 2 data ${d}`);
    })

    const result = data2.subscribe(sub);
    // above code will trigger only 1 ajax request
    this._designUtility.printData(this.printdataElement, `above code will trigger 1 ajax request ( Check Code and network in console, posts api will get called only once )`);
  }

  ngOnDestroy(): void {
      this.sub1.unsubscribe();
      this.sub2.unsubscribe();
      
  }
}
