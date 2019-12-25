import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

export class AssetsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url;
    if (url.indexOf('/assets/') === 0) {
      url = `${environment.assetsBaseUrl}${url}`;
    }
    return next.handle(
      req.clone({
        url
      })
    );
  }
}
