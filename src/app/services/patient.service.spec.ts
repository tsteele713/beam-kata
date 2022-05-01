import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { PatientService } from './patient.service';
import { AppModule } from '../app.module';

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
      providers: [
        HttpClient,
      ]
    });
    service = TestBed.inject(PatientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
