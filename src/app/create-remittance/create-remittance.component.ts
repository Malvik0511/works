import { Component, OnInit } from '@angular/core';
import { Sender } from '../sender';
import { Reciever } from '../reciever';
import { RemittanceDataService } from '../remittance-data.service'


@Component({
  selector: 'app-crate-remittance',
  templateUrl: './create-remittance.component.html',
  styleUrls: ['./create-remittance.component.css']
})
export class CreateRemittanceComponent implements OnInit {
	sender: Sender;
	reciever: Reciever;
	summ: Number;
  constructor(private dataService: RemittanceDataService) { }

  ngOnInit() {
  	this.getDefaultData()  	
  }

  getDefaultData():void {
  	this.sender = this.dataService.getDefaultSender();
  	this.reciever = this.dataService.getDefaultReciever();
  	this.summ = this.dataService.getDefaultSum()
  }

}
