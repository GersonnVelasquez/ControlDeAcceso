import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultavisitasComponent } from './consultavisitas.component';

describe('ConsultavisitasComponent', () => {
  let component: ConsultavisitasComponent;
  let fixture: ComponentFixture<ConsultavisitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultavisitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultavisitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
