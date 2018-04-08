import { TestBed, inject } from '@angular/core/testing';

import { RemittanceDataService } from './remittance-data.service';

describe('RemittanceDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemittanceDataService]
    });
  });

  it('should be created', inject([RemittanceDataService], (service: RemittanceDataService) => {
    expect(service).toBeTruthy();
  }));
});
