import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureStudentComponent } from './future-student.component';

describe('FutureStudentComponent', () => {
  let component: FutureStudentComponent;
  let fixture: ComponentFixture<FutureStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
