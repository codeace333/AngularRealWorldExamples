import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomHttpinterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('CustomHttpinterceptorInterceptor')
    let Usertokens = 'easas1123123asdfadkjsfl123123123';
    let modifiedRequest = request;

    if (Usertokens) {
      modifiedRequest = request.clone({
        setHeaders: {
          Usertokens
        }
      })
    }

    return next.handle(modifiedRequest);
  }
}
