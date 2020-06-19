import { Injectable } from '@angular/core';
import { ApiService } from '../../core/api.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeService extends ApiService {
  topArticlesEndpoint = '/v2/top-headlines';
  constructor(public http: HttpClient) {
    super(http, 'newsapi', '/v2/everything');
  }

  codeArticles(q?: string) {
      const params = new HttpParams()
        .set('q', q);
      return this.get(params);
  }

  getTopArticles() {
    const params = new HttpParams()
      .set('category', 'technology');
    return this.get(params, this.topArticlesEndpoint);
  }
}
