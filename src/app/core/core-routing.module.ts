import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';

import { TemperatureComponent } from './temperature/temperature.component';
import { HeartRateComponent } from './heart-rate/heart-rate.component';
import { LieDetectorComponent } from './lie-detector/lie-detector.component';
import { CheckPatientsComponent } from './check-patients/check-patients.component';
import { SinglePatientComponent } from './single-patient/single-patient.component';
import { PatientsViewComponent } from './patients-view/patients-view.component';
import { CheckTemperatureComponent } from './check-temperature/check-temperature.component';
import { CheckHeartrateComponent } from './check-heartrate/check-heartrate.component';


const routes: Routes = [
  { path: '', component: CoreComponent,
    children:[
      {path:'', redirectTo:'temperature' },
      { path: 'temperature', component: TemperatureComponent },
      { path: 'heartrate', component:HeartRateComponent },
      { path: 'liedetector', component: LieDetectorComponent },
      { path: 'checkpatients', component: PatientsViewComponent,
        children:[
          {path:'', component:CheckPatientsComponent},
          {path:':id', component: SinglePatientComponent,
            children:[
              {path:'temperature', component:CheckTemperatureComponent},
              {path: 'heartrate', component:CheckHeartrateComponent}
            ]}
        ]}
      //{path:'settings', component: SettingsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
export const RoutingComponent = [TemperatureComponent ,HeartRateComponent,LieDetectorComponent,CheckPatientsComponent,SinglePatientComponent,PatientsViewComponent];