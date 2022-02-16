import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchAllComponent } from './research-all.component';

describe('ResearchAllComponent', () => {
  let component: ResearchAllComponent;
  let fixture: ComponentFixture<ResearchAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
