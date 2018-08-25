import { TestBed, inject } from '@angular/core/testing';

import { UploadItemsService } from './upload-items.service';

describe('UploadItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UploadItemsService]
    });
  });

  it('should be created', inject([UploadItemsService], (service: UploadItemsService) => {
    expect(service).toBeTruthy();
  }));
});
