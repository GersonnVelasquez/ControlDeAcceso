import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarobjetosComponent } from './agregarobjetos.component';

describe('AgregarobjetosComponent', () => {
  let component: AgregarobjetosComponent;
  let fixture: ComponentFixture<AgregarobjetosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarobjetosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarobjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
