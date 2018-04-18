import { Component, OnInit,  Input, OnChanges } from '@angular/core';
import {RemittanceDataService} from '../remittance-data.service'
import { CustomValidatorService } from '../custom-validator.service';
import { Reciever, Sender, RemittanceData } from '../data-model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-remittance-form',
  templateUrl: './remittance-form.component.html',
  styleUrls: ['./remittance-form.component.css']
})
export class RemittanceFormComponent implements OnInit {
	remittanceForm: FormGroup;
	optionAr: number[];
	yearSince: number;
	monthSince: number;
	remittanceData: RemittanceData;
	sender: Sender;
	reciever: Reciever;
	summ: number;
	numPattern: RegExp;
	namePattern: RegExp;
	summPattern: RegExp;
	current: string;

	constructor(private fb: FormBuilder, private dataService: RemittanceDataService, private validateService: CustomValidatorService, private router: Router, private route: ActivatedRoute) {
		this.optionAr = Array(12).fill(1).map((x,i)=>i);	
		this.numPattern = /\d{4}/;
		this.namePattern = /\w{2,}\s\w{2,}/
		this.summPattern  = /\d{3}/	


	}

	createForm(){ 
		console.log(this.sender.year)
		this.remittanceForm = this.fb.group({
			sender: this.fb.group({
			cardNumber: this.fb.group({
				num1_4: [this.sender.cardNumber[0], [Validators.required, this.validateService.cardNumberValidator()]],
				num5_8: [this.sender.cardNumber[1], [Validators.required, this.validateService.cardNumberValidator()]],
				num9_12: [this.sender.cardNumber[2], [Validators.required, this.validateService.cardNumberValidator()]],
				num13_16: [this.sender.cardNumber[3], [Validators.required, this.validateService.cardNumberValidator()]]
			}),
	      		fullName: [this.sender.fullName, [Validators.required, this.validateService.fullNameValidator()] ],
	      		validateUntil: this.fb.group({
	      			month:[this.sender.month, Validators.required ],
	      			year:[this.sender.year, Validators.required ]
	      		})
			}),
			reciever:this.fb.group({
				cardNumber: this.fb.group({
					num1_4: [this.reciever.cardNumber[0], [Validators.required, this.validateService.cardNumberValidator() ]],
					num5_8: [this.reciever.cardNumber[1], [Validators.required, this.validateService.cardNumberValidator() ]],
					num9_12: [this.reciever.cardNumber[2], [Validators.required, this.validateService.cardNumberValidator() ]],
					num13_16: [this.reciever.cardNumber[3], [Validators.required, this.validateService.cardNumberValidator() ]],
				})
			}),      	
	      	
	      	summ:[this.summ, [Validators.required, this.validateService.summValidator()] ],
	    });

	}

	ngOnChanges() {		
  		this.rebuildForm();
	}

	setDataForForm(){
		let remittance
		this.route.params.subscribe(
		  	(params) => {
			    remittance = this.dataService.getNote(params['id']);
			    console.log(remittance)
			    this.sender = remittance.sender as Sender;
		    	this.reciever = remittance.reciever as Reciever;
		    	this.summ = remittance.summ;
			}
		)
	}



	onSubmit() {
	  this.remittanceData = this.prepareSendRemmitance();
	  this.dataService.save(this.remittanceData);
	  this.router.navigate(['form']);
	  this.createForm()
	}

	test(i):void{
			console.dir(i)
		 if (Array.prototype.indexOf.call(i.classList, 'ng-valid') !== -1)
		 console.log("good")


	}

	clearLocal(){
		this.dataService.clearHistory();
	}

	prepareSendRemmitance(): RemittanceData{
		const model = this.remittanceForm.value;
		const sData = model.sender;
		const rData = model.reciever;
		const sender = new Sender([
			sData.cardNumber.num1_4,
			sData.cardNumber.num5_8,
			sData.cardNumber.num9_12,
			sData.cardNumber.num13_16,
			],
			sData.fullName,
			sData.validateUntil.month,
			sData.validateUntil.year
		);
		const reciever = new Reciever([
			rData.cardNumber.num1_4,
			rData.cardNumber.num5_8,
			rData.cardNumber.num9_12,
			rData.cardNumber.num13_16,
		])
		const summ: number = model.summ
		return new RemittanceData(sender, reciever, summ)
	}


	rebuildForm() {
	 this.remittanceForm.reset();
	}


	ngOnInit() {
		this.setDataForForm()
		this.createForm()	
	}

}
