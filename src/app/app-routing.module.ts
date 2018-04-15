import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemittanceFormComponent }      from './remittance-form/remittance-form.component';
import { RemittanceHistoryComponent }      from './remittance-history/remittance-history.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'form', component: RemittanceFormComponent },
  { path: 'form/:id', component: RemittanceFormComponent },
  { path: 'history', component: RemittanceHistoryComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
