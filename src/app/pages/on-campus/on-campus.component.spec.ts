import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnCampusComponent } from './on-campus.component';

describe('OnCampusComponent', () => {
  let component: OnCampusComponent;
  let fixture: ComponentFixture<OnCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnCampusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
