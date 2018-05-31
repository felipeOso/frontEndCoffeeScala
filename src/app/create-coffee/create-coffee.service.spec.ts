import { TestBed, inject } from '@angular/core/testing';

import { CreateCoffeeService } from './create-coffee.service';

describe('CreateCoffeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateCoffeeService]
    });
  });

  it('should be created', inject([CreateCoffeeService], (service: CreateCoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
