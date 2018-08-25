import { TestBed, inject } from '@angular/core/testing';

import { FactsByUserService } from './facts-by-user.service';

describe('FactsByUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactsByUserService]
    });
  });

  it('should be created', inject([FactsByUserService], (service: FactsByUserService) => {
    expect(service).toBeTruthy();
  }));
});
