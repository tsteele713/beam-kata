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
      this.displayBoxes.next(this.isFromStarter ? this.createBoxVisualization(2, this.isFromStarter) : this.createBoxVisualization(4, this.isFromStarter));
    });
  }

  private createBoxVisualization(sliceLength: number, isStarterBox: boolean): Box[] {
    let boxes: Box[] = [];
    for (let i = 0; i < this.colorSortedList.length; i += sliceLength) {
        let brushes: Brush[] = [];
        const chunk = this.colorSortedList.slice(i, i + sliceLength);
        const unique = [...new Set(chunk.map(item => item.brush_color))];
        unique.forEach((element) => {
          let colorChunk = chunk.filter((patient) => patient.brush_color === element);
          let brushCount = isStarterBox ? colorChunk.length : 0;
          brushes.push({ color: element, replacementBrushCount: colorChunk.length, brushCount: brushCount});
        });
        boxes.push({brushes: brushes});

    }
    return boxes;
  }
}
