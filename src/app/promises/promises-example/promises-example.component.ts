import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Component({
  selector: 'app-promises-example',
  templateUrl: './promises-example.component.html',
  styles: [
  ]
})
export class PromisesExampleComponent implements AfterViewInit {

  private objPromise: Promise<any>;
  private objCatchPromise: Promise<any>;
  private objPromise1: Promise<any>;
  private objPromise2: Promise<any>;
  private objPromise3: Promise<any>;

  @ViewChild('printdata') printdataElement: ElementRef;

  constructor(private _designUtility: DesignUtilitiesService) {
    this.objPromise = new Promise(resolve => {
      resolve('done');
      // primise allow to emmit only one value either Resolve or Reject
      resolve('done 2') // wont work
    })

    this.objCatchPromise = new Promise((resolve, reject) => {
      reject('Failed');
    })

    this.objPromise1 = new Promise((resolve, reject) => {
      resolve('Chaining - first promise done');
    })

    this.objPromise2 = new Promise((resolve, reject) => {
      resolve('Chaining -Second promise done');
    })

    this.objPromise3 = new Promise((resolve, reject) => {
      reject('Chaining -Third promise failed');
    })
  }

  ngAfterViewInit(): void {
    this.objPromise.then(data => {
      console.log(data)
      this._designUtility.printData(this.printdataElement, ` Promise 1 Resolved => ${data}`);
    });

    // alternate way to log in console
    this.objPromise.then(console.log);

    this.objCatchPromise.then(data => {
      console.log(data)
      this._designUtility.printData(this.printdataElement, ` /////////////////////////////////// `);
      this._designUtility.printData(this.printdataElement, ` Promise Resolved => ${data}`);
    }).catch(data => {
      console.log(data)
      this._designUtility.printData(this.printdataElement, ` /////////////////////////////////// `);
      this._designUtility.printData(this.printdataElement, ` Promise Rejected => ${data}`);
    });


    this.objPromise1.then((data) => {
      console.log(data);
      this._designUtility.printData(this.printdataElement, ` /////////////////////////////////// `);
      this._designUtility.printData(this.printdataElement, ` Promise Resolved => ${data}`);
      return this.objPromise2;
    }).then((data) =>{
      console.log(data);
      this._designUtility.printData(this.printdataElement, ` /////////////////////////////////// `);
      this._designUtility.printData(this.printdataElement, ` Promise Resolved => ${data}`);
      return this.objPromise3;
    }).then((data) => {
      console.log(data);
      this._designUtility.printData(this.printdataElement, ` /////////////////////////////////// `);
      this._designUtility.printData(this.printdataElement, ` Promise Resolved => ${data}`);
      return this.objPromise2;
    }).catch(data => {
      this._designUtility.printData(this.printdataElement, ` /////////////////////////////////// `);
      this._designUtility.printData(this.printdataElement, ` Promise Resolved => ${data}`);
      console.log('failed')
    })
    
  }
}
