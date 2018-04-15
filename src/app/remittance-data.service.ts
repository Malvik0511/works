import { Injectable } from '@angular/core';;
import { Reciever, Sender, RemittanceData, defaultSender, defaultReciever } from './data-model';


@Injectable()
export class RemittanceDataService {
	storageName:string;
	repeatPaymentStorage: string

  constructor() {
  	this.storageName = "remittance-storage";
  	this.repeatPaymentStorage = "remittance-storage-storage"
   }

  repeatPayment(id:number):void{
  	let note = this.getNote(id);
  	let cardNumber = note.sender.cardNumber
  	let key = this.repeatPaymentStorage;
  	let data = {sender: note.sender, reciever: note.reciever,summ: note.summ}
  	console.log(`Повтор операции №${id}`)
	localStorage.setItem(key, JSON.stringify(data))
  }

  checkRepeat():any{
  	let key = this.repeatPaymentStorage;
  	let info = localStorage.getItem(key);
  	localStorage.setItem(key, "")
  	if (info) return JSON.parse(info);
  	else return "";
  }

  save(data: RemittanceData):void {
  	let key = this.storageName
  	let storage = JSON.parse(localStorage.getItem(key))||[];
  	let newStorage = [...storage, data]
  	let index = newStorage.length;
  	console.log(`В хранилище ${key} добавлена запись №${index}` )
  	localStorage.setItem(key, JSON.stringify(newStorage));
  }



  convertStringToRemittanceData(data: string):RemittanceData{
  	return JSON.parse(data);
  }

  getNote(id:number):RemittanceData{
  	let key = this.storageName;
  	let storage = JSON.parse(localStorage.getItem(key));
  	console.log(`Из хранилища ${key} отдана запись №${id}`)
  	return storage[id] as RemittanceData ||  new RemittanceData(defaultSender, defaultReciever, 0);
  }

  getHistory():RemittanceData[]{
  	let key = this.storageName;
  	console.log(`Из хранилища ${key} отдана вся история`)
  	return JSON.parse(localStorage.getItem(key)) as RemittanceData[]
  }

  clearNote(id: number):void{
  	let key = this.storageName;
  	let storage = JSON.parse(localStorage.getItem(key));
  	let newStorage = [...storage.slice(0,id), ...storage.slice(id + 1)]
  	console.log(`Из хранилища ${key} удалена запись ${id}`)
  	localStorage.setItem(key, JSON.stringify(newStorage));
  }

  clearHistory():void{
  	localStorage.clear();
  	console.log("Хранилище очищено")
  }

}
