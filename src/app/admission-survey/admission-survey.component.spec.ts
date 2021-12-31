import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionSurveyComponent } from './admission-survey.component';

describe('AdmissionSurveyComponent', () => {
  let component: AdmissionSurveyComponent;
  let fixture: ComponentFixture<AdmissionSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
