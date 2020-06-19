import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[overlayLoading]'
})
export class OverlayLoadingDirective implements OnInit {
  private elLoading: HTMLSpanElement;
  private overlayEl: HTMLDivElement;
  private _display = false;

  constructor(private el: ElementRef, private render: Renderer2) {

  }

  @Input() set overlayLoading(loading: boolean) {
    this._display = loading;
    if (!this.elLoading) {
      return;
    }
    this.displayLoading();
  }

  ngOnInit(): void {
    this.setup();
    this.displayLoading();
  }

  show() {
    this.render.setStyle(this.elLoading, 'display', 'initial');
    this.render.setStyle(this.overlayEl, 'display', 'initial');
  }

  hide() {
    this.render.setStyle(this.elLoading, 'display', 'none');
    this.render.setStyle(this.overlayEl, 'display', 'none');
  }

  private setup() {
    this.overlayEl = this.render.createElement('div');
    this.elLoading = this.render.createElement('span');

    this.render.setAttribute(this.elLoading, 'class', 'spinner-grow box-loading text-primary');
    this.render.setAttribute(this.overlayEl, 'class', 'loading-box');

    this.render.appendChild(this.el.nativeElement, this.overlayEl);
    this.render.appendChild(this.el.nativeElement, this.elLoading);
    this.render.setStyle(this.el.nativeElement, 'position', 'relative');
    this.render.setStyle(this.el.nativeElement, 'overflow', 'hidden');
  }

  private displayLoading() {
    if (this._display) {
      this.show();
    } else {
      this.hide();
    }
  }
}
