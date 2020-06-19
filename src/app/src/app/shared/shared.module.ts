import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLoadingDirective } from './directives/overlay-loading.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UniverComponent } from './components/univer/univer.component';



@NgModule({
  declarations: [OverlayLoadingDirective, UniverComponent],
  exports: [
    OverlayLoadingDirective,
    UniverComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
