import { TestBed } from '@angular/core/testing';

import { ProfessionalsService } from './professionals.service';

xdescribe('ProfessionalsService', () => {
  let service: ProfessionalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessionalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
