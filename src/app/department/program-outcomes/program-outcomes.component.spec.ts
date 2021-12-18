import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOutcomesComponent } from './program-outcomes.component';

describe('ProgramOutcomesComponent', () => {
  let component: ProgramOutcomesComponent;
  let fixture: ComponentFixture<ProgramOutcomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramOutcomesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramOutcomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
