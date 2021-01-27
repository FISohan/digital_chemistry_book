import { TestBed } from '@angular/core/testing';

import { Chapter11Service } from './chapter11.service';

describe('Chapter11Service', () => {
  let service: Chapter11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chapter11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
