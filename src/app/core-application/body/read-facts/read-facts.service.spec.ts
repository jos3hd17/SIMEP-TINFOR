import { TestBed, inject } from '@angular/core/testing';

import { ReadFactsService } from './read-facts.service';

describe('ReadFactsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadFactsService]
    });
  });

  it('should be created', inject([ReadFactsService], (service: ReadFactsService) => {
    expect(service).toBeTruthy();
  }));
});
