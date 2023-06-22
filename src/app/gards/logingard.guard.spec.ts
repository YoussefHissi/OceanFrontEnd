import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { logingardGuard } from './logingard.guard';

describe('logingardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => logingardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
