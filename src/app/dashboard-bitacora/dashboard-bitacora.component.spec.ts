import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBitacoraComponent } from './dashboard-bitacora.component';

describe('DashboardBitacoraComponent', () => {
  let component: DashboardBitacoraComponent;
  let fixture: ComponentFixture<DashboardBitacoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBitacoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
