import { Injectable } from '@angular/core';
import { Reciever, Sender, RemittanceData, defaultSender, defaultReciever } from './data-model';


@Injectable()
export class RemittanceDataService {
	storageName:string;
	repeatPaymentStorage: string

  constructor() {
  	this.storageName = "remittance-storage";
  	this.repeatPaymentStorage = "remittance-storage-storage"
   }

  save(data: RemittanceData):void {
  	let key = this.storageName
  	let storage = JSON.parse(localStorage.getItem(key))||[];
  	let newStorage = [...storage, data]
  	let index = newStorage.length;
  	//console.log(`В хранилище ${key} добавлена запись №${index}` )
  	localStorage.setItem(key, JSON.stringify(newStorage));
  }

  getNote(id:number):RemittanceData{
  	let key = this.storageName;
    let storage = localStorage.getItem(key)
    if (storage){
  	 let storage = JSON.parse(localStorage.getItem(key));
      if (storage[id]){
    	 //console.log(`Из хранилища ${key} отдана запись №${id}`)
       return storage[id] as RemittanceData
      }
    }
    console.log(`Создана новая форма по умолчанию`)
  	return new RemittanceData(defaultSender, defaultReciever, "");
  }

  getHistory():RemittanceData[]{
  	let key = this.storageName;
  	//console.log(`Из хранилища ${key} отдана вся история`)
  	return JSON.parse(localStorage.getItem(key)) as RemittanceData[]
  }

  clearNote(id: number):void{
  	let key = this.storageName;
  	let storage = JSON.parse(localStorage.getItem(key));
  	let newStorage = [...storage.slice(0,id), ...storage.slice(id + 1)]
  	//console.log(`Из хранилища ${key} удалена запись ${id}`)
  	localStorage.setItem(key, JSON.stringify(newStorage));
  }

  clearHistory():void{
  	localStorage.clear();
  	//console.log("Хранилище очищено")
  }

}
