import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpackagesComponent } from './listpackages.component';

describe('ListpackagesComponent', () => {
  let component: ListpackagesComponent;
  let fixture: ComponentFixture<ListpackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpackagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
