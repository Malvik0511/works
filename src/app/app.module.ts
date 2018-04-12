import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RemittanceDataService }          from './remittance-data.service';
import { FormsModule }   from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateRemittanceComponent } from './create-remittance/create-remittance.component';
import { RemittanceFormComponent } from './remittance-form/remittance-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRemittanceComponent,
    RemittanceFormComponent
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
