import { TestBed } from '@angular/core/testing';

import { CrudManagerService } from './crud-manager.service';

describe('CrudManagerService', () => {
  let service: CrudManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
