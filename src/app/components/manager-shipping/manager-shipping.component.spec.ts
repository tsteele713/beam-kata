import { Patient } from '../../models/patient.model';
import { TestBed, ComponentFixture  } from '@angular/core/testing';
import { ManagerShippingComponent } from './manager-shipping.component';
import { PatientService } from '../../services/patient.service';
import { AppModule } from '../../app.module';

describe('ManagerShippingComponent', () => {
  let component: ManagerShippingComponent;
  let fixture: ComponentFixture<ManagerShippingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ManagerShippingComponent
      ],
      imports: [
        AppModule
      ],
      providers: [
        PatientService,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(ManagerShippingComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
