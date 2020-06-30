import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtempleComponent } from './gtemple.component';

describe('GtempleComponent', () => {
  let component: GtempleComponent;
  let fixture: ComponentFixture<GtempleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtempleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
