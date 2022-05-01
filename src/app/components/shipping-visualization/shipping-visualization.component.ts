import {
         Component,
         Input,
         OnInit
       } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { Box } from '../../models/box.model';
import { PatientService } from '../../services/patient.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'bk-shipping-visualization',
  templateUrl: './shipping-visualization.component.html',
  styleUrls: ['./shipping-visualization.component.less']
})
export class ShippingVisualizationComponent implements OnInit {

  colorSortedList: Patient[] = [];
  starterBoxCount: number = 0;
  displayBoxes:  BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>([]);

  constructor(private patientService: PatientService){}

  ngOnInit() {

    this.patientService.retrievePatientsForShipping().subscribe((familyPatientList) => {
      this.starterBoxCount = Math.ceil(familyPatientList.length / 2);
      this.colorSortedList = familyPatientList.sort((a, b) => (a.brush_color < b.brush_color) ? -1 : 1);
      this.displayBoxes.next(this.createStarterBoxes());
    });
  }

  createStarterBoxes(): Box[]{
      let boxes: Box[] = [];
      for (let i = 0; i < this.colorSortedList.length; i = i + 2) {
        let box: Box = { brushes: [] };
          let firstPatient = this.colorSortedList[i];
          let nextPatient = i + 1 < this.colorSortedList.length ? this.colorSortedList[i + 1] : null;

          if (nextPatient && firstPatient.brush_color === nextPatient.brush_color) {
            box.brushes.push({
              color: firstPatient.brush_color,
              replacementBrushCount: 2,
              brushCount: 2
            });
          } else {
            box.brushes.push({
              color: firstPatient.brush_color,
              replacementBrushCount: 1,
              brushCount: 1
            });
            if (nextPatient) {
              box.brushes.push({
                color: nextPatient.brush_color,
                replacementBrushCount: 1,
                brushCount: 1
              });
            }
          }
          boxes.push(box);
      }
      return boxes;
  }
}
