import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiagateComponent } from './indiagate.component';

describe('IndiagateComponent', () => {
  let component: IndiagateComponent;
  let fixture: ComponentFixture<IndiagateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiagateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiagateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
