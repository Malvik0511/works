import { Component, OnInit } from '@angular/core';
import { RemittanceDataService } from '../remittance-data.service';
import { Reciever, Sender, RemittanceData } from '../data-model';

@Component({
  selector: 'app-remittance-history',
  templateUrl: './remittance-history.component.html',
  styleUrls: ['./remittance-history.component.css']
})
export class RemittanceHistoryComponent implements OnInit {
	history: RemittanceData[]

  constructor(private dataService: RemittanceDataService) { }

  ngOnInit() {
  	this.getHistory();
  	console.log(this.history)
  }

  getHistory():void{
  	this.history = this.dataService.getHistory();
  }

  deleteNote(id):void{
  	this.dataService.clearNote(id);
  	this.getHistory()
  }
}
