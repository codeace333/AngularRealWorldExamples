import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album.model';
import { ApiserviceService } from 'src/app/_common/services/apiservice.service';
import { GlobalErrorHandlerService } from '../services/global-error-handler.service';

@Component({
  selector: 'app-intercept-token',
  templateUrl: './intercept-token.component.html',
  styles: [
  ]
})
export class InterceptTokenComponent implements OnInit {

  parentRoute: string = 'Intercept'
  albums: Album[];

  constructor(private _apiService: ApiserviceService, private _globalErrorHandler : GlobalErrorHandlerService) {

  }

  ngOnInit(): void {
    this._apiService.getPhotosWrongUrl().subscribe(d => {
      this.albums = d.filter(d => d.id < 5);
      // console.log(this.albums)
    },
    (error) => {
      // console.warn('adding message to service', error);
      this._globalErrorHandler.AddErrorMsg(error);
      
    }
    );
  }

}
