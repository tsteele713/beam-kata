import { Component, Input } from '@angular/core';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'bk-starter-boxes',
  templateUrl: './starter-boxes.component.html',
  styleUrls: ['./starter-boxes.component.less']
})
export class StarterBoxesComponent {

  @Input() familyPatientList: Patient[];


}
