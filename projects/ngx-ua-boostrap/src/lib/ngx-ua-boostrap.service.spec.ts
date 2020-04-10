import { TestBed } from '@angular/core/testing';

import { NgxUaBoostrapService } from './ngx-ua-boostrap.service';

describe('NgxUaBoostrapService', () => {
  let service: NgxUaBoostrapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxUaBoostrapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
