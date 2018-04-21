import { Injectable } from '@angular/core';
import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class CustomValidatorService {

	formYear:number;
	formMonth:number;

  constructor() { }

  public cardNumberValidator(): ValidatorFn {
    const pattern: RegExp = /\d{4}/;
    return (control: AbstractControl): { [key: string]: any } => {
	    if (!(control.dirty || control.touched)) {
	        return null;
	    } else {
	    	return pattern.test(control.value) ? null : {custom: `Номер должен содержать 4 цифры`};
	    }
	};
  }

  public fullNameValidator(): ValidatorFn {
    const pattern: RegExp = /\w{2,}\s\w{2,}/;
    return (control: AbstractControl): { [key: string]: any } => {
	    if (!(control.dirty || control.touched)) {
	        return null;
	    } else {
	    	return pattern.test(control.value) ? null : {custom: `Имя и фамилия должны содержать от 2-х симлов, резделенных пробелом`};
	    }
	};
  }

  public summValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
    	const summ:number = Number(control.value);
	    if (!(control.dirty || control.touched)) {
	        return null;
	    } else {
	    	return (control.value && (control.value[0] === "0" || isNaN(summ)))? {custom: `Сумма перевода введена не корректно`} : (summ < 50 || summ > 200000) ? {custom: `Допустимая сумма перевода от 50 до 200000 рублей`}:null;
	    }
	};
  }

  public yearValidator(): ValidatorFn {
    const currentYear:number = Number(String(new Date().getFullYear()).slice(-2));
    const currentMonth:number = new Date().getMonth()
    return (control: AbstractControl): { [key: string]: any } => {
    	const cardYear = Number(control.value);
    	this.formYear = control.value;
	    if (!(control.dirty || control.touched)) {
	        return null;
	    } else {
	    	return (cardYear !== undefined && (cardYear > 99 || cardYear <= 0  || (cardYear - currentYear >= 10) || isNaN(cardYear)))? {custom: `Информация о дате введена не корректно`} : (cardYear && (currentYear > cardYear || (currentYear === cardYear && this.formMonth && currentMonth >= Number(this.formMonth)))) ? {custom: `Срок действия карты вышел`}:null ;
	    }
	};
  }


   public monthValidator(): ValidatorFn {
	    const currentYear:number = Number(String(new Date().getFullYear()).slice(-2));
	    const currentMonth:number = new Date().getMonth() + 1;
	    return (control: AbstractControl): { [key: string]: any } => {
	    	let cardMonth = Number(control.value);
	    	this.formMonth = control.value
		    if (!(control.dirty || control.touched)) {
		        return null;
		    } else {
		    	return (cardMonth !==undefined && (cardMonth > 12 || cardMonth === 0 || isNaN(cardMonth)))? {custom: `Информация о дате введена не корректно`}:(
		    	cardMonth && (cardMonth <= currentMonth) && (this.formYear && Number(this.formYear) <= currentYear))? {custom: `Срок действия карты вышел`}:null ;
		    }
		};
	}
  

}


