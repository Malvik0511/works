import { Component, OnInit } from '@angular/core';
import { RemittanceDataService } from '../remittance-data.service';
import { Reciever, Sender, RemittanceData } from '../data-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-remittance-history',
  templateUrl: './remittance-history.component.html',
  styleUrls: ['./remittance-history.component.css']
})
export class RemittanceHistoryComponent implements OnInit {
	history: RemittanceData[]

  constructor(private dataService: RemittanceDataService,
  	private route: ActivatedRoute,
  	private location: Location,
  	private router: Router) { }

  ngOnInit() {
  	this.getHistory();
  }

  getHistory():void{
  	this.history = this.dataService.getHistory();
  }

  deleteNote(id:number):void{
  	this.dataService.clearNote(id);
  	this.getHistory()
  }

  toRemittanceForme(id?:number):void{
  	if (id !== undefined){
      this.router.navigate([`form/${id}`])
  		//this.dataService.repeatPayment(id)
  	}
  		
  	else	this.router.navigate(['form'])
  	
  }
}
