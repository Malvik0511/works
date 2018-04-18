import { Injectable } from '@angular/core';
import { ValidatorFn, Validators, AbstractControl } from '@angular/forms';

@Injectable()
export class CustomValidatorService {

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
    const pattern: RegExp = /[1-9]{1}\d{2,5}/;
    return (control: AbstractControl): { [key: string]: any } => {
	    if (!(control.dirty || control.touched)) {
	    	console.log(123)
	        return null;
	    } else {
	    	console.log(pattern.test(control.value))
	    	return pattern.test(control.value) ? null : {custom: `Сумма перевода введена не корректно`};
	    }
	};
  }
  

}


