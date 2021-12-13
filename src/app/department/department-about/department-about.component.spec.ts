import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAboutComponent } from './department-about.component';

describe('DepartmentAboutComponent', () => {
  let component: DepartmentAboutComponent;
  let fixture: ComponentFixture<DepartmentAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
