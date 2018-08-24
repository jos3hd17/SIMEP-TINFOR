import { TestBed, inject } from '@angular/core/testing';

import { DelivererService } from './deliverer.service';

describe('DelivererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DelivererService]
    });
  });

  it('should be created', inject([DelivererService], (service: DelivererService) => {
    expect(service).toBeTruthy();
  }));
});
