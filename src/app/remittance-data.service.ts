import { Injectable } from '@angular/core';
import { Sender } from './sender';
import { Reciever } from './reciever';

@Injectable()
export class RemittanceDataService {

	private defaultSender:Sender = new Sender(["", "", "", ""],"","","")

	private defaultReciever:Reciever = {
		cardNumber:["", "", "", ""]
	}
	private defaultSum:number = 0;


  constructor() { }

  getDefaultSender (): Sender {
  	return this.defaultSender;
  }

  getDefaultReciever (): Reciever {
  	return this.defaultReciever;
  }

  getDefaultSum (): Number {
  	return this.defaultSum;
  }

}
