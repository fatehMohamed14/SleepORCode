import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export class ApiService {
  url: string;
  header: HttpHeaders;
  constructor(protected http: HttpClient, protected apiProvider: string, protected endpoint: string) {
    console.log(environment[apiProvider]);
    this.url = environment[apiProvider] + endpoint;
    if (apiProvider === 'newsapi') {
      this.header = new HttpHeaders({
        'x-api-key': environment['apiKey']
      });
    }
  }

  get(params: HttpParams, customEndPoint?: string) {
    let url;
    if (customEndPoint) {
      url = environment[this.apiProvider] + customEndPoint;
    } else {
      url = this.url;
    }
    return this.http.get(url, {params, headers: this.header});
  }
}
