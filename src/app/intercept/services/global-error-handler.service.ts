import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService {

  objErrorSubject$ = new Subject<string>();
  constructor() {

   }

   AddErrorMsg(error){
    //  console.info('message added', error);
     this.objErrorSubject$.next(error);
   }
}
