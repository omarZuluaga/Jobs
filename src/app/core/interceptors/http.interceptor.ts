import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreAuthenticate } from '@Utils/class/store-auth.class';

@Injectable()
export class HttpIntercept implements HttpInterceptor {
    constructor(private router: Router, private storeAuthenticate: StoreAuthenticate) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return <any>next.handle(req).pipe(
            tap((x: any) => x),
            catchError(err => {
                if(err.status === 401) {
                    this.storeAuthenticate.logout();
                    this.router.navigate(['/login']);
                }
                return throwError(err);
            })
        );
    }
}