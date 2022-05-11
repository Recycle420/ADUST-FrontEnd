import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNoticeComponent } from './popup-notice.component';

describe('PopupNoticeComponent', () => {
  let component: PopupNoticeComponent;
  let fixture: ComponentFixture<PopupNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNoticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
