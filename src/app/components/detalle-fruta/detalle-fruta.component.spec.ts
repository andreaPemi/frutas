import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFrutaComponent } from './detalle-fruta.component';

describe('DetalleFrutaComponent', () => {
  let component: DetalleFrutaComponent;
  let fixture: ComponentFixture<DetalleFrutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleFrutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
