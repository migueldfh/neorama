import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddConsultorComponent } from './dialog-add-consultor.component';

describe('DialogAddConsultorComponent', () => {
  let component: DialogAddConsultorComponent;
  let fixture: ComponentFixture<DialogAddConsultorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddConsultorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddConsultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
