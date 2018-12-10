import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFrutaComponent } from './crud-fruta.component';

describe('CrudFrutaComponent', () => {
  let component: CrudFrutaComponent;
  let fixture: ComponentFixture<CrudFrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
