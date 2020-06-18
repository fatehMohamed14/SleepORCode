import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeArticlesListComponent } from './code-articles-list/code-articles-list.component';


const routes: Routes = [
  { path: '', component: CodeArticlesListComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeRoutingModule { }
