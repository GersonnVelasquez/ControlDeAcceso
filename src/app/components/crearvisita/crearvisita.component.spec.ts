import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearvisitaComponent } from './crearvisita.component';

describe('CrearvisitaComponent', () => {
  let component: CrearvisitaComponent;
  let fixture: ComponentFixture<CrearvisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearvisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearvisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
