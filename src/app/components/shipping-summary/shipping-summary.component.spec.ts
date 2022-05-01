import { Patient } from '../../models/patient.model';
import { TestBed, ComponentFixture  } from '@angular/core/testing';
import { ShippingSummaryComponent } from './shipping-summary.component';
import { PatientService } from '../../services/patient.service';
import { AppModule } from '../../app.module';
import { EMPTY, of } from 'rxjs';

describe('ShippingSummaryComponent', () => {
  let component: ShippingSummaryComponent;
  let fixture: ComponentFixture<ShippingSummaryComponent>;
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
 }
])
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ShippingSummaryComponent
      ],
      imports: [
        AppModule
      ],
      providers: [
        { provide: PatientService, useFactory: () => patientService },
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ShippingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should properly set values for each family properly', () => {
        component.ngOnInit();
        expect(component.starterBoxCount).toBe(3);
        expect(component.toothbrushesCount).toBe(5);
        expect(component.replacementHeadCount).toBe(5);
        expect(component.refillBoxCount).toBe(2);
    });
  });
});
