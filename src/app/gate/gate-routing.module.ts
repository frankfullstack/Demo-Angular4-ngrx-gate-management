import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { GateComponent } from './gate.component';

const routes: Routes = Route.withShell([
  { path: 'gate', component: GateComponent, data: { title: extract('Gate') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GateRoutingModule { }
