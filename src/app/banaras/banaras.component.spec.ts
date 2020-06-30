import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanarasComponent } from './banaras.component';

describe('BanarasComponent', () => {
  let component: BanarasComponent;
  let fixture: ComponentFixture<BanarasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanarasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanarasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
