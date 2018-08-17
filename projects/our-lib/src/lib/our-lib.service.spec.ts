import { TestBed, inject } from '@angular/core/testing';

import { OurLibService } from './our-lib.service';

describe('OurLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OurLibService]
    });
  });

  it('should be created', inject([OurLibService], (service: OurLibService) => {
    expect(service).toBeTruthy();
  }));
});
