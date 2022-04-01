import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionAdministratorComponent } from './admission-administrator.component';

describe('AdmissionAdministratorComponent', () => {
  let component: AdmissionAdministratorComponent;
  let fixture: ComponentFixture<AdmissionAdministratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionAdministratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
