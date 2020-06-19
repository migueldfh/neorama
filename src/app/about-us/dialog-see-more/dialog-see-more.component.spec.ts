import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSeeMoreComponent } from './dialog-see-more.component';

describe('DialogSeeMoreComponent', () => {
  let component: DialogSeeMoreComponent;
  let fixture: ComponentFixture<DialogSeeMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSeeMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSeeMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
