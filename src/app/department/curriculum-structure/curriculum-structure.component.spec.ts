import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumStructureComponent } from './curriculum-structure.component';

describe('CurriculumStructureComponent', () => {
  let component: CurriculumStructureComponent;
  let fixture: ComponentFixture<CurriculumStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurriculumStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
