import { Component, OnInit } from '@angular/core';
import { CodeService } from '../code.service';
import { Observable } from 'rxjs';
import { map, finalize, distinctUntilChanged, debounceTime, switchMap, startWith, filter } from 'rxjs/operators';
import { Article } from '../models/article.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-code-articles-list',
  templateUrl: './code-articles-list.component.html',
  styleUrls: ['./code-articles-list.component.scss']
})
export class CodeArticlesListComponent implements OnInit {
  codeArticles$: Observable<Article[]>;
  loading: boolean;
  form: FormGroup;
  constructor(private codeService: CodeService, private fb: FormBuilder) {
    this.form = this.fb.group({
      query: ['']
    });

    this.form.get('query').valueChanges.pipe(
      filter((trm) => trm.trim().length > 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(
        term => this.codeArticles$ = this.getArticles(term)
      )
    ).subscribe();
  }

  ngOnInit(): void {
    this.codeArticles$ = this.getArticles('javascript');
  }

  getArticles = (query: string): Observable<Article[]> => {
    this.loading = true;
    return  this.codeService.codeArticles(query).pipe(
      map((res: any) => res.articles),
      finalize(() => this.loading = false)
    );
  }

}
