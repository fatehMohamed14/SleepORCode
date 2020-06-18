import { Component, OnInit } from '@angular/core';
import { CodeService } from '../code.service';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-code-articles-list',
  templateUrl: './code-articles-list.component.html',
  styleUrls: ['./code-articles-list.component.scss']
})
export class CodeArticlesListComponent implements OnInit {
  codeArticles$: Observable<Article>;

  constructor(private codeService: CodeService) { }

  ngOnInit(): void {
    this.codeArticles$ = this.codeService.codeArticles('javascript').pipe(map((res: any) => res.articles));
  }
}
