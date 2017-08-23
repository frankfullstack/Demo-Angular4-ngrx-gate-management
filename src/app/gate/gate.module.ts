import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { GateComponent } from './gate.component';
import { GateRoutingModule } from './gate-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GateFlightListComponent } from './flightlist/FlightList.component';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';
import { GateService } from './gate.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { GateEffects } from './effects/gate';

import { reducers } from './reducers';
import { FlightitemComponent } from './flightitem/flightitem.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    NgbModule,
    MultiselectDropdownModule,
    GateRoutingModule,
    EffectsModule.forFeature([GateEffects]),
    StoreModule.forFeature('gate', reducers)
  ],
  declarations: [GateComponent, GateFlightListComponent, FlightdetailComponent, FlightitemComponent],
  providers: [
    GateService
  ]
})
export class GateModule { }
