import { Component, OnInit } from '@angular/core';
import { RemittanceDataService } from '../remittance-data.service';
import { Reciever, Sender, RemittanceData } from '../data-model';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-remittance-history',
  templateUrl: './remittance-history.component.html',
  styleUrls: [
    './remittance-history.component.css',
    './__data/remittance-history__data.css',
    './__action-place/remittance-history__action-place.css', './__action-place/_theme/remittance-history__action-place_theme.css',
    './__data-container/remittance-history__data-container.css', './__data/_theme/remittance-history__data_theme.css',
    './__header/remittance-history__header.css',
    './__remittance-title/remittance-history__remittance-title.css', './__remittance-title/_width/remittance-history__remittance-title_widh.css',
    './__remittance-title/_theme/remittance-history__remittance-title_theme.css',
    './__remittance-note/_theme/remittance-history__remittance-note_theme.css'
  ]
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
}
