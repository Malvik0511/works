import { Injectable } from '@angular/core';;
import { Reciever, Sender, RemittanceData } from './data-model';


@Injectable()
export class RemittanceDataService {
	storageName:string;
	saveIndex:number
	localStorageKeys:string[]

  constructor() {
  	this.storageName = "remittance-storage-";
	this.saveIndex = 0;
	this.localStorageKeys = [];

   }


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

  save(data: RemittanceData):void {
  	this.updateLocalStorageKeys();
  	let note = this.convertRemittanceDataToString(data)
  	let key = this.storageName + this.saveIndex
  	this.localStorageKeys.push(key);
  	localStorage.setItem(key, note)
  	console.log(`Создано хранилище ${key}`)
  	this.saveIndex++;
  }

  convertRemittanceDataToString(data: RemittanceData):string{
  	return JSON.stringify(data);
  }

  convertStringToRemittanceData(data: string):RemittanceData{
  	return JSON.parse(data);
  }

  getNote(key:string):RemittanceData{
  	if (!localStorage.getItem(key)) throw Error(`There is no Note in ${key}`)
  	console.log(`Отдана информация из хранилища ${key}`)
  	return this.convertStringToRemittanceData(localStorage.getItem(key)) ;
  }

  getHistory():RemittanceData[]{
  	this.updateLocalStorageKeys();
  	return this.localStorageKeys.map(key =>  this.getNote(key))
  }

  clearHistory():void{
  	localStorage.clear();
  }


/*

  save(data: RemittanceData):void {
  		let storage = this.storageName + this.saveIndex
  		while (localStorage.getItem(storage)){
  			this.saveIndex++;
  			storage = this.storageName + this.saveIndex
  			console.log("Перебор хранилища")
  		}
  		localStorage.setItem(storage, data)
  		console.log(`Создано хранилище ${storage}`)
  		this.saveIndex++;
  }
*/

}
