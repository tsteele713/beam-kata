import { Patient } from '../../models/patient.model';
import { TestBed, ComponentFixture  } from '@angular/core/testing';
import { ShippingVisualizationComponent } from './shipping-visualization.component';
import { PatientService } from '../../services/patient.service';
import { AppModule } from '../../app.module';
import { EMPTY, of } from 'rxjs';

describe('ShippingVisualizationComponent', () => {
  let component: ShippingVisualizationComponent;
  let fixture: ComponentFixture<ShippingVisualizationComponent>;
  let patientService = jasmine.createSpyObj("PatientService", {
    'retrievePatientsForShipping': of([
 {
   "id": 2,
   "name": "Anakin",
   "brush_color": "blue",
   "primary_insured_id": null,
   "contract_effective_date": "2018-01-01"
 },
 {
   "id": 3,
   "name": "Padme",
   "brush_color": "pink",
   "primary_insured_id": 2,
   "contract_effective_date": ""
 },
 {
   "id": 4,
   "name": "Luke",
   "brush_color": "blue",
   "primary_insured_id": 2,
   "contract_effective_date": ""
 },
 {
   "id": 5,
   "name": "Leia",
   "brush_color": "green",
   "primary_insured_id": 2,
   "contract_effective_date": ""
 },
 {
   "id": 6,
   "name": "Ben",
   "brush_color": "green",
   "primary_insured_id": 2,
   "contract_effective_date": ""
 },
 {
   "id": 7,
   "name": "Chewbacca",
   "brush_color": "orange",
   "primary_insured_id": 2,
   "contract_effective_date": ""
 }
])
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShippingVisualizationComponent
      ],
      imports: [
        AppModule
      ],
      providers: [
        { provide: PatientService, useFactory: () => patientService },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ShippingVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should display starter boxes with count correctly', () => {
      let expectedColorSortedList = [
        { id: 2, name: 'Anakin', brush_color: 'blue', primary_insured_id: null, contract_effective_date: '2018-01-01' },
        { id: 4, name: 'Luke', brush_color: 'blue', primary_insured_id: 2, contract_effective_date: '' },
        { id: 5, name: 'Leia', brush_color: 'green', primary_insured_id: 2, contract_effective_date: '' },
        { id: 6, name: 'Ben', brush_color: 'green', primary_insured_id: 2, contract_effective_date: '' },
        { id: 7, name: 'Chewbacca', brush_color: 'orange', primary_insured_id: 2, contract_effective_date: '' },
        { id: 3, name: 'Padme', brush_color: 'pink', primary_insured_id: 2, contract_effective_date: '' }
      ];

      let expectedDisplayBoxes = [
        { brushes: [ { color: 'blue', replacementBrushCount: 2, brushCount: 2 } ] },
        { brushes: [ { color: 'green', replacementBrushCount: 2, brushCount: 2 } ] },
        { brushes: [ { color: 'orange', replacementBrushCount: 1, brushCount: 1 }, { color: 'pink', replacementBrushCount: 1, brushCount: 1 } ] }
      ]
        component.isFromStarter = true;
        component.ngOnInit();
        expect(component.starterBoxCount).toBe(3);
        expect(component.colorSortedList).toEqual(expectedColorSortedList);
        expect(component.displayBoxes.getValue()).toEqual(expectedDisplayBoxes);
    });

    it('should display refill boxes with count correctly', () => {

      let expectedDisplayBoxes = [
        { brushes: [ { color: 'blue', replacementBrushCount: 2, brushCount: 0 }, { color: 'green', replacementBrushCount: 2, brushCount: 0 }  ] },
        { brushes: [ { color: 'orange', replacementBrushCount: 1, brushCount: 0 }, { color: 'pink', replacementBrushCount: 1, brushCount: 0 } ] }
      ]
        component.isFromStarter = false;
        component.ngOnInit();
        expect(component.starterBoxCount).toBe(3);
        expect(component.displayBoxes.getValue()).toEqual(expectedDisplayBoxes);
    });
  });
});
