import { TestBed, inject } from '@angular/core/testing';

import { EmpprjService } from './empprj.service';

describe('EmpprjService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpprjService]
    });
  });

  it('should be created', inject([EmpprjService], (service: EmpprjService) => {
    expect(service).toBeTruthy();
  }));
});
