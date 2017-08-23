import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { AdminComponent } from './admin.component';
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import { GateEffects } from './effects/gate';
// import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    NgbModule,
    // MultiselectDropdownModule,
    AdminRoutingModule,
    // EffectsModule.forFeature([GateEffects]),
    // StoreModule.forFeature('admin', reducers)
  ],
  declarations: [AdminComponent],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
