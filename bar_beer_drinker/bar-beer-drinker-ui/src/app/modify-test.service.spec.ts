import { TestBed } from '@angular/core/testing';

import { ModifyTestService } from './modify-test.service';

describe('ModifyTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModifyTestService = TestBed.get(ModifyTestService);
    expect(service).toBeTruthy();
  });
});
