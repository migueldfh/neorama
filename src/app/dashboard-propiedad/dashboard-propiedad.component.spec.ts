import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPropiedadComponent } from './dashboard-propiedad.component';

describe('DashboardPropiedadComponent', () => {
  let component: DashboardPropiedadComponent;
  let fixture: ComponentFixture<DashboardPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
