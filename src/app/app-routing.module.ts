import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemittanceFormComponent }      from './remittance-form/remittance-form.component';
import { RemittanceHistoryComponent }      from './remittance-history/remittance-history.component';

const routes: Routes = [
  { path: 'form', component: RemittanceFormComponent },
  { path: 'history', component: RemittanceHistoryComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
