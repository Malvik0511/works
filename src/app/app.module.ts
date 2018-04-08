import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RemittanceDataService }          from './remittance-data.service';


import { AppComponent } from './app.component';
import { CreateRemittanceComponent } from './create-remittance/create-remittance.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateRemittanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RemittanceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
