import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPropiedadesComponent } from './dashboard-propiedades.component';

describe('DashboardPropiedadesComponent', () => {
  let component: DashboardPropiedadesComponent;
  let fixture: ComponentFixture<DashboardPropiedadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPropiedadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPropiedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
