import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable, throwError, throwError as observableThrowError} from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { map, filter, catchError, mergeMap, debounceTime } from 'rxjs/operators'
import { APP_SETTINGS } from '../types/settings';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(public http: HttpClient, private adalSvc: MsAdalAngular6Service) {
    this.adalSvc.acquireToken(APP_SETTINGS.instance).subscribe((token: string) => {

      this.headers = this.headers.append("Content-Type", "application/json; charset=UTF-8");
      this.headers = this.headers.append('Authorization', `Bearer ${token}`);
    });
  }

  private getJson(path: string): Observable<HttpResponse<string>> {
    var headers: HttpHeaders = new HttpHeaders();

    var options = {
      headers: this.headers
    };

    return this.http.get<HttpResponse<string>>(path, options);
  }

  public getPersonDetails(): Observable<string[]> {
    var options = {
      headers: this.headers
    };

    const path = `${APP_SETTINGS.baseUrl}/api/values/get`;

    return this.http.get<string[]>(path, options)
      .pipe(
        map(response => response),
        catchError((error: any) => observableThrowError(error || 'Server error')));
  }  
}