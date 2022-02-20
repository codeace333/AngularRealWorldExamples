import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GlobalErrorHandlerService } from 'src/app/intercept/services/global-error-handler.service';

@Component({
  selector: 'app-header-error-handler',
  templateUrl: './header-error-handler.component.html',
  styles: [
  ]
})
export class HeaderErrorHandlerComponent implements OnInit {

  errorMessage:string;
  constructor(
    private _globalErrorHandler : GlobalErrorHandlerService
  ) { }

  ngOnInit(): void {
    this._globalErrorHandler.objErrorSubject$.subscribe(errorMessage => {
      this.errorMessage = errorMessage;
      // console.log('this is message',this.errorMessage);
      }
    )
  }

}
