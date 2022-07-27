import { TestBed } from '@angular/core/testing';

import { AniversariantesService } from './aniversariantes.service';

describe('AniversariantesService', () => {
  let service: AniversariantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AniversariantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
