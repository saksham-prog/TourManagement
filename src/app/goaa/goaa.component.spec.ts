import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoaaComponent } from './goaa.component';

describe('GoaaComponent', () => {
  let component: GoaaComponent;
  let fixture: ComponentFixture<GoaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
