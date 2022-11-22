import { TestBed } from '@angular/core/testing';

import { QuemSomosService } from './quem-somos.service';

describe('QuemSomosService', () => {
  let service: QuemSomosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuemSomosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
