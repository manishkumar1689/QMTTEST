import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOnBoardingComponent } from './project-on-boarding.component';

describe('ProjectOnBoardingComponent', () => {
  let component: ProjectOnBoardingComponent;
  let fixture: ComponentFixture<ProjectOnBoardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOnBoardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOnBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
