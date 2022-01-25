import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule, RoutingComponent } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavComponent } from './nav/nav.component';
import { SettingsComponent } from './settings/settings.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TempRecordComponent } from './temp-record/temp-record.component';
import { HeartRecordComponent } from './heart-record/heart-record.component';
import { HttpClientModule } from '@angular/common/http';
import { TemperatureService } from './services/temperature.service';
import { HeartrateService } from './services/heartrate.service';
import { CheckTemperatureComponent } from './check-temperature/check-temperature.component';
import { CheckHeartrateComponent } from './check-heartrate/check-heartrate.component';



@NgModule({
  declarations: [
    CoreComponent,
    NavComponent,
    SettingsComponent,
    TempRecordComponent,
    HeartRecordComponent,
    RoutingComponent,
    CheckHeartrateComponent,
    CheckTemperatureComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxChartsModule,
    HttpClientModule
  ],
  providers: [TemperatureService, HeartrateService]
})
export class CoreModule { }
