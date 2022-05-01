import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  retrievePatientsForShipping(): Observable<Patient[]> {
    return this.http.get<Patient[]>('https://beamtech.github.io/boxing-kata-js/perks.json');
  }

}
