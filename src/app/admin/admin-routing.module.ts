import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../core/route.service';
import { extract } from '../core/i18n.service';
import { AdminComponent } from './admin.component';

const routes: Routes = Route.withShell([
  { path: 'admin', component: AdminComponent, data: { title: extract('Admin') } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
