import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DallakeComponent } from './dallake.component';

describe('DallakeComponent', () => {
  let component: DallakeComponent;
  let fixture: ComponentFixture<DallakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DallakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DallakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
