import { TestBed } from '@angular/core/testing';

import { AllTechnologiesService } from './all-technologies.service';

describe('AllTechnologiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllTechnologiesService = TestBed.get(AllTechnologiesService);
    expect(service).toBeTruthy();
  });
});
