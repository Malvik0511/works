import { Component, OnInit,  Input, OnChanges } from '@angular/core';
import {RemittanceDataService} from '../remittance-data.service'
import { Reciever, Sender, RemittanceData } from '../data-model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

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
	remittanceData: {};

	constructor(private fb: FormBuilder, private dataService: RemittanceDataService) {
		var date = new Date();
		this.optionAr = Array(12).fill().map((x,i)=>i);	
		this.monthSince = date.getMonth();	
		this.yearSince = Number(String(date.getFullYear()).slice(-2)); 
		this.createForm()
	}

	createForm(){ 
		this.remittanceForm = this.fb.group({
			sender: this.fb.group({
			cardNumber: this.fb.group({
				num1_4: ['1', Validators.required ],
				num5_8: ['2', Validators.required ],
				num9_12: ['3', Validators.required ],
				num13_16: ['4', Validators.required ]
			})
	      		fullName: ['5', Validators.required ],
	      		validateUntil: this.fb.group({
	      			month:[this.monthSince, Validators.required ],
	      			year:[this.yearSince, Validators.required ]
	      		})
			}),
			reciever:this.fb.group({
				cardNumber: this.fb.group({
					num1_4: ['6', Validators.required ],
					num5_8: ['7', Validators.required ],
					num9_12: ['8', Validators.required ],
					num13_16: ['9', Validators.required ],
				})
			}),      	
	      	
	      	summ:['0', Validators.required ],
	    });

	}

	setCardNumber() {
		console.log(Array(4).fill())
	  const numFGs = Array(4).fill().map(num => this.fb.group(num));
	  const numFormArray = this.fb.array(numFGs);
	  this.remittanceForm.setControl('secretLairs', numFormArray);
	}

	ngOnChanges() {
  		this.rebuildForm();
	}

	onSubmit() {
	  this.remittanceData = this.prepareSendRemmitance();
	  this.dataService.save(this.remittanceData);
	  /*this.rebuildForm();*/
	}

	prepareSendRemmitance(){
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

	ngOnInit() {}

}
