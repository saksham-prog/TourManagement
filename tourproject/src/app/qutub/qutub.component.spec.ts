import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QutubComponent } from './qutub.component';

describe('QutubComponent', () => {
  let component: QutubComponent;
  let fixture: ComponentFixture<QutubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QutubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QutubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
