import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBuzonComponent } from './dashboard-buzon.component';

describe('DashboardBuzonComponent', () => {
  let component: DashboardBuzonComponent;
  let fixture: ComponentFixture<DashboardBuzonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardBuzonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBuzonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
