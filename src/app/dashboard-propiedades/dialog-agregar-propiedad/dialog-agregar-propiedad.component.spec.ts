import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAgregarPropiedadComponent } from './dialog-agregar-propiedad.component';

describe('DialogAgregarPropiedadComponent', () => {
  let component: DialogAgregarPropiedadComponent;
  let fixture: ComponentFixture<DialogAgregarPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAgregarPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAgregarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
