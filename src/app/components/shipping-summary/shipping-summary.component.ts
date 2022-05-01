import {
      Component,
      OnInit,
      Input
} from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'bk-shipping-summary',
  templateUrl: './shipping-summary.component.html',
  styleUrls: ['./shipping-summary.component.less']
})
export class ShippingSummaryComponent implements OnInit {

  @Input() isStarterBoxPage: boolean = true;

  familyPatientList: Patient[] = [];

  starterBoxCount: number = 0;
  toothbrushesCount: number = 0;
  replacementHeadCount: number = 0;
  refillBoxCount: number = 0;

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.retrievePatientsForShipping().subscribe((familyPatientList) => {
      this.starterBoxCount = Math.ceil(familyPatientList.length / 2);
      this.toothbrushesCount = familyPatientList.length;
      this.replacementHeadCount = familyPatientList.length;
      this.refillBoxCount = Math.ceil(this.toothbrushesCount / 4);

    });
  }

}
