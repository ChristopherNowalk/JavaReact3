import { TestBed } from '@angular/core/testing';

import { GameFunctionService } from './game-function.service';

describe('GameFunctionService', () => {
  let service: GameFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
