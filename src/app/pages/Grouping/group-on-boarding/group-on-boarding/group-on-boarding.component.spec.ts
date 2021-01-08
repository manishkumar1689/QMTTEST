import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupOnBoardingComponent } from './group-on-boarding.component';

describe('GroupOnBoardingComponent', () => {
  let component: GroupOnBoardingComponent;
  let fixture: ComponentFixture<GroupOnBoardingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupOnBoardingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupOnBoardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
