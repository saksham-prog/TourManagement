import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerAboutComponent } from './inner-about.component';

describe('InnerAboutComponent', () => {
  let component: InnerAboutComponent;
  let fixture: ComponentFixture<InnerAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
