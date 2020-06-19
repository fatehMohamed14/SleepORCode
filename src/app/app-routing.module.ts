import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniverComponent } from './src/app/shared/components/univer/univer.component';


const routes: Routes = [
  {path: 'sleep', component: UniverComponent},
  {path: 'code', loadChildren: () => import('./src/app/modules/code/code.module').then(m => m.CodeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
