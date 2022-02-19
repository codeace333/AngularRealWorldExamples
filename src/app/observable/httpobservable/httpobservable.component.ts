import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/album.model';
import { ApiserviceService } from 'src/app/_common/services/apiservice.service';

@Component({
  selector: 'app-httpobservable',
  templateUrl: './httpobservable.component.html',
  styles: [
  ]
})
export class HttpobservableComponent implements OnInit {

  private albums:Album[];
  constructor(private _apiservice : ApiserviceService) {

   }

  ngOnInit(): void {
    console.log('taking only 2 values')
    this._apiservice.getPhotos().subscribe(result => {
      this.albums = result.filter(data => data.id < 5 );
    })

  }

}
