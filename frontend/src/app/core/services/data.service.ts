import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MsalService } from '@azure/msal-angular';
import { Observable, throwError, throwError as observableThrowError} from 'rxjs';
import { HttpHeaders, HttpClient, HttpResponse, HttpParams } from '@angular/common/http';
import { map, filter, catchError, mergeMap, debounceTime } from 'rxjs/operators'
import { APP_SETTINGS } from '../types/settings';
import { Talent } from 'src/app/talent/talent.type';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static jsonContentType = "application/json; charset=UTF-8";
  public baseUrl: string = APP_SETTINGS.baseUrl;
  public accessToken: string = '';
  public scopes = this.msalService.getScopesForEndpoint(APP_SETTINGS.instance);

  constructor(public http: HttpClient, private msalService: MsalService) { }

  private getJson(path: string): Observable<HttpResponse<string>> {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", DataService.jsonContentType);
    headers = headers.append("Accept", '*/*');

    var options = {
      headers: headers
    };

    return this.http.get<HttpResponse<string>>(path, options);
  }

  private postJson(path: string, json: string = ""): Observable<HttpResponse<string>> {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", DataService.jsonContentType);

    var options = {
      headers: headers
    };

    return this.http.post<HttpResponse<string>>(path, json, options);
  }

  private putJson(path: string, json: string = ""): Observable<HttpResponse<string>> {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", DataService.jsonContentType);

    var options = {
      headers: headers
    };

    return this.http.put<HttpResponse<string>>(path, json, options);
  }

  private deleteJson(path: string): Observable<HttpResponse<string>> {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", DataService.jsonContentType);

    var options = {
      headers: headers
    };

    return this.http.delete<HttpResponse<string>>(path, options);
  }

  public getPersonDetails(): Observable<Talent> {
    var headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", DataService.jsonContentType);
    //headers = headers.append("Authorization", "Bearer " + DataService.jsonContentType);
    headers = headers.append("Accept", '*/*');

    var options = {
      headers: headers
    };

    const path = `${this.baseUrl}/api/talent/getpersondetails`;
    return this.http.get<Talent>(path, options)
      .pipe(
        map(response => response),
        catchError((error: any) => observableThrowError(error || 'Server error')));
  }

  public getToken(): Promise<boolean>{
    return new Promise<boolean>((resolve, reject) => {
      this.msalService.acquireTokenSilent(this.scopes)
    
        .then(accessToken => {
          this.accessToken = accessToken;
          console.log(this.accessToken);
          resolve(true);
          // tslint:disable-next-line: promise-function-async
        }).catch(() => {
    
          return this.msalService.acquireTokenPopup(this.scopes)
            .then(token => {
    
              this.accessToken = token;
              console.log(this.accessToken);
              resolve(true);
    
            })
            .catch((error) => {
              reject(new Error(error));
            });
        });
    });
  }
}