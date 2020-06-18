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

  get(params: HttpParams) {
    return this.http.get(this.url, {params, headers: this.header});
  }
}
