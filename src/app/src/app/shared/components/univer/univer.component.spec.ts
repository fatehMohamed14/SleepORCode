import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniverComponent } from './univer.component';

describe('UniverComponent', () => {
  let component: UniverComponent;
  let fixture: ComponentFixture<UniverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
