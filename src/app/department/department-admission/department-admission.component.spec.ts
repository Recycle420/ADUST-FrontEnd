import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAdmissionComponent } from './department-admission.component';

describe('DepartmentAdmissionComponent', () => {
  let component: DepartmentAdmissionComponent;
  let fixture: ComponentFixture<DepartmentAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
