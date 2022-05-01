import { Component, OnInit  } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'bk-manager-shipping',
  templateUrl: './manager-shipping.component.html',
  styleUrls: ['./manager-shipping.component.less']
})
export class ManagerShippingComponent implements OnInit {

  familyPatientList: Patient[] = [];

  constructor(private patientService: PatientService) {

  }

  ngOnInit() {
    this.patientService.retrievePatientsForShipping().subscribe((familyPatientList) => {
      this.familyPatientList = familyPatientList;
    });
  }

}
