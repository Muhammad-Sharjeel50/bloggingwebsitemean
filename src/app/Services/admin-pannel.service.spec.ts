import { TestBed } from '@angular/core/testing';

import { AdminPannelService } from './admin-pannel.service';

describe('AdminPannelService', () => {
  let service: AdminPannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
