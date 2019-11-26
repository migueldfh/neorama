import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardConsultoresComponent } from './dashboard-consultores.component';

describe('DashboardConsultoresComponent', () => {
  let component: DashboardConsultoresComponent;
  let fixture: ComponentFixture<DashboardConsultoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardConsultoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardConsultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
