import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HimalayaComponent } from './himalaya.component';

describe('HimalayaComponent', () => {
  let component: HimalayaComponent;
  let fixture: ComponentFixture<HimalayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HimalayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HimalayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
