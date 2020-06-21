import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeArticlesListComponent } from './code-articles-list/code-articles-list.component';
import { CodeRoutingModule } from './code-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ArticleCreateComponent } from './article-create/article-create.component';


@NgModule({
  declarations: [CodeArticlesListComponent, ArticleCreateComponent],
  imports: [
    CodeRoutingModule,
    SharedModule
  ]
})
export class CodeModule { }
