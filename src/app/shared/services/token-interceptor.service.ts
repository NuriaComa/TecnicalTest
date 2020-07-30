import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';



const APPID = 'ddJcOPwSICWf3Gvbkw4Q';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let request = req;

    request = req.clone({
      setHeaders: {
        'app-id': `${ APPID }`
      }
    });

    return next.handle(request);
  }
}
