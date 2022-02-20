import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';
import { Album } from 'src/app/album.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  getPhotos(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/photos'
    return this._http.get<Album[]>(url).pipe(
      catchError(this.handleError), // then handle the error
    );
  }

  getPhotosWrongUrl(): Observable<any> {
    let Wrongurl = 'https://jsonplaceholder.typicode.com/photosss'
    return this._http.get<Album[]>(Wrongurl).pipe(
      catchError(this.handleError), // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {

    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');

  };

}
