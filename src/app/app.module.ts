import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RemittanceDataService }          from './remittance-data.service';
import { FormsModule }   from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RemittanceFormComponent } from './remittance-form/remittance-form.component';
import { RemittanceHistoryComponent } from './remittance-history/remittance-history.component';

@NgModule({
  declarations: [
    AppComponent,
    RemittanceFormComponent,
    RemittanceHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  
  providers: [RemittanceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
