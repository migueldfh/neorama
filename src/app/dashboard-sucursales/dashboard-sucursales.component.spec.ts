import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSucursalesComponent } from './dashboard-sucursales.component';

describe('DashboardSucursalesComponent', () => {
  let component: DashboardSucursalesComponent;
  let fixture: ComponentFixture<DashboardSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
