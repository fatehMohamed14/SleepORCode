import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLoadingDirective } from './directives/overlay-loading.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [OverlayLoadingDirective],
  exports: [
    OverlayLoadingDirective,
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
