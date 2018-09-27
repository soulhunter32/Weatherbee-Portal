import { TestBed, inject } from '@angular/core/testing';

import { BoardSessionService } from './board-session.service';

describe('BoardSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardSessionService]
    });
  });

  it('should be created', inject([BoardSessionService], (service: BoardSessionService) => {
    expect(service).toBeTruthy();
  }));
});
