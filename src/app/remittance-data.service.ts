import { Injectable } from '@angular/core';;
import { Reciever, Sender, RemittanceData } from './data-model';


@Injectable()
export class RemittanceDataService {
	storageName:string;
	//saveIndex:number
	//localStorageKeys:string[]

  constructor() {
  	this.storageName = "remittance-storage-";
	//this.saveIndex = 0;
	//this.localStorageKeys = [];

   }

/*
  private updateLocalStorageKeys(): void{
  	if (!this.localStorageKeys.length){
  		let key = this.storageName + this.saveIndex
  		while (localStorage.getItem(key)){
  			this.localStorageKeys.push(key)
  			this.saveIndex = this.saveIndex + 1;
  			key = this.storageName + this.saveIndex;
  			console.log("Восстановление ключей")
  		}
  	}
  }
  */

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
  	return storage[id] as RemittanceData;
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
