import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxUaBoostrapComponent } from './ngx-ua-boostrap.component';

describe('NgxUaBoostrapComponent', () => {
  let component: NgxUaBoostrapComponent;
  let fixture: ComponentFixture<NgxUaBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxUaBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxUaBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
