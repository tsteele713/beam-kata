import {
         Component,
         Input,
         OnInit
       } from '@angular/core';
import { Patient } from '../../models/patient.model';
import { Box, Brush } from '../../models/box.model';
import { PatientService } from '../../services/patient.service';
import { BehaviorSubject  } from 'rxjs';
import { first  } from 'rxjs/operators';

@Component({
  selector: 'bk-shipping-visualization',
  templateUrl: './shipping-visualization.component.html',
  styleUrls: ['./shipping-visualization.component.less']
})
export class ShippingVisualizationComponent implements OnInit {

  @Input() isFromStarter: boolean = true;

  colorSortedList: Patient[] = [];
  starterBoxCount: number = 0;
  displayBoxes:  BehaviorSubject<Box[]> = new BehaviorSubject<Box[]>([]);

  constructor(private patientService: PatientService){}

  ngOnInit() {

    this.patientService.retrievePatientsForShipping().pipe(first()).subscribe((familyPatientList) => {
      this.starterBoxCount = Math.ceil(familyPatientList.length / 2);
      this.colorSortedList = familyPatientList.sort((a, b) => (a.brush_color < b.brush_color) ? -1 : 1);
      this.displayBoxes.next(this.isFromStarter ? this.createStarterBoxes() : this.createRefillBoxes());
    });
  }

  private createStarterBoxes(): Box[]{
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
              box.brushes.push(this.defaultBrush(firstPatient.brush_color, true));
            if (nextPatient) {
              box.brushes.push(this.defaultBrush(nextPatient.brush_color, true));
            }
          }
          boxes.push(box);
      }
      return boxes;
  }

  private createRefillBoxes(): Box[] {
    let boxes: Box[] = [];
    for (let i = 0; i < this.colorSortedList.length; i += 4) {
        let brushes: Brush[] = [];
        const chunk = this.colorSortedList.slice(i, i + 4);
        const unique = [...new Set(chunk.map(item => item.brush_color))];
        unique.forEach((element) => {
          let colorChunk = chunk.filter((patient) => patient.brush_color === element);
          brushes.push({ color: element, replacementBrushCount: colorChunk.length, brushCount: 0});
        });
        boxes.push({brushes: brushes});

    }
    return boxes;
  }

  private defaultBrush(color: string, isStarterBox: boolean) {
    let initialBrushCount = isStarterBox ? 1 : 0;
    return {
      color: color,
      replacementBrushCount: 1,
      brushCount: initialBrushCount
    }
  }

}
