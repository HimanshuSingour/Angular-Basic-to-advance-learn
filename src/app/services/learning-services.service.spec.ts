import { TestBed } from '@angular/core/testing';

import { LearningServicesService } from './learning-services.service';

describe('LearningServicesService', () => {
  let service: LearningServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
