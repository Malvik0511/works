import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RemittanceDataService } from './remittance-data.service';
import { CustomValidatorService } from './custom-validator.service';

import { FormsModule }   from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RemittanceFormComponent } from './remittance-form/remittance-form.component';
import { RemittanceHistoryComponent } from './remittance-history/remittance-history.component';
import { AppRoutingModule } from './/app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';

@NgModule({
  declarations: [
    AppComponent,
    RemittanceFormComponent,
    RemittanceHistoryComponent,
    PageNotFoundComponent,
    ValidationMessageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  
  providers: [
  	RemittanceDataService,
  	CustomValidatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
