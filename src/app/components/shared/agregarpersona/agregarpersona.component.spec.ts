import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarpersonaComponent } from './agregarpersona.component';

describe('AgregarpersonaComponent', () => {
  let component: AgregarpersonaComponent;
  let fixture: ComponentFixture<AgregarpersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarpersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarpersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
