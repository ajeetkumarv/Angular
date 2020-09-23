import {Component} from '@angular/core'
import { PatientService } from './patient.service';

@Component({
    selector: 'patient',
    template: `<h2>Patient residence history</h2>
        <ul>
            <li *ngFor="let place of getResidenceHistory()"> {{ place }}</li>
        </ul>
    `
})
export class PatientComponent {

    residenceHistory;

    getResidenceHistory() {
        return this.residenceHistory;
    }

    constructor(service: PatientService) { // this is DI now
        //let service = new PatientService(); // bad practice, this is coupled
        this.residenceHistory = service.getPatientResidencialHistory();
    }

}