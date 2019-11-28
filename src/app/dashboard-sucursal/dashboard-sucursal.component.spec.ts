import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSucursalComponent } from './dashboard-sucursal.component';

describe('DashboardSucursalComponent', () => {
  let component: DashboardSucursalComponent;
  let fixture: ComponentFixture<DashboardSucursalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSucursalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSucursalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
