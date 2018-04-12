import { Injectable } from '@angular/core';
import { Sender } from './sender';
import { Reciever, Sender, RemittanceData } from '../data-model';


@Injectable()
export class RemittanceDataService {
	storageName = "remittance-storage-"
	saveIndex = '0'
	localStorageKeys = []

	private defaultSender:Sender = new Sender(["1", "2", "3", "5"],"","","")

	private defaultReciever:Reciever = {
		cardNumber:["1", "2", "3", "4"]
	}
	private defaultSum:number = 0;


  constructor() { }


  private updateLocalStorageKeys(): void{
  	if (!this.localStorageKeys.length){
  		let key = this.storageName + this.saveIndex
  		while (localStorage.getItem(key)){
  			this.localStorageKeys.push(key)
  			this.saveIndex++;
  			key = this.storageName + this.saveIndex;
  			console.log("Восстановление ключей")
  		}
  	}
  }

  save(data: RemittanceData):void {
  		this.updateLocalStorageKeys();
  		let key = this.storageName + this.saveIndex
  		this.localStorageKeys.push(key);
  		localStorage.setItem(key, data)
  		console.log(`Создано хранилище ${key}`)
  		this.saveIndex++;
  		console.log(this.localStorageKeys)
  }

  getNote(key:string):RemittanceData{
  	if (!localStorage.getItem(key)) throw Error(`There is no Note in ${key}`)
  	console.log(`Отдана информация из хранилища ${key}`)
  	return localStorage.getItem(key);
  }

  getHistory():RemittanceData[]{
  	this.updateLocalStorageKeys();
  	return this.localStorageKeys.map(key =>  getNote(key))
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
