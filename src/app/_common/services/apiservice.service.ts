import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Album } from 'src/app/album.model';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  getPhotos(): Observable<any> {
    let url = 'https://jsonplaceholder.typicode.com/photos'
    return this._http.get<Album[]>(url);
  }
}
