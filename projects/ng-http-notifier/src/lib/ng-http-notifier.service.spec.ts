import { TestBed } from '@angular/core/testing';

import { NgHttpNotifierService } from './ng-http-notifier.service';

describe('NgHttpNotifierService', () => {
  let service: NgHttpNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgHttpNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
