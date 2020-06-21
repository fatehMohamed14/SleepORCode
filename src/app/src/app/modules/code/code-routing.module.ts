import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeArticlesListComponent } from './code-articles-list/code-articles-list.component';
import { ArticleCreateComponent } from './article-create/article-create.component';


const routes: Routes = [
  { path: '', component: CodeArticlesListComponent, pathMatch: 'full' },
  { path: 'article/new', component: ArticleCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
