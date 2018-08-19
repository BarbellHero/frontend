import { TestBed, inject } from '@angular/core/testing';

import { WorkoutRepositoryService } from './workout-repository.service';

describe('WorkoutRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkoutRepositoryService]
    });
  });

  it('should be created', inject([WorkoutRepositoryService], (service: WorkoutRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
