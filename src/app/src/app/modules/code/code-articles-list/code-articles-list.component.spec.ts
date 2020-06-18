import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeArticlesListComponent } from './code-articles-list.component';

describe('CodeArticlesListComponent', () => {
  let component: CodeArticlesListComponent;
  let fixture: ComponentFixture<CodeArticlesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeArticlesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
