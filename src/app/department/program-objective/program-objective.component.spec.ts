import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramObjectiveComponent } from './program-objective.component';

describe('ProgramObjectiveComponent', () => {
  let component: ProgramObjectiveComponent;
  let fixture: ComponentFixture<ProgramObjectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramObjectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
