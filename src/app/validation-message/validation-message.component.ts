import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.css']
})
export class ValidationMessageComponent{
	@Input() field: FormControl;

	public get validatonMessages() {
	    const field = this.field;
	    if (!field || !field.errors) {
	      return false;
	    }
	    const errors = [];
	    const config = {
	      required: 'Поле требует заполнения',
	      pattern: 'Значение не соответствует форме'
	    };

	    if (field.errors.hasOwnProperty('custom')) {
	      config['custom'] = (typeof field.errors.custom === 'string' && field.errors.custom.length) ?
	        field.errors.custom :
	        'Значение не соответствует форме';
	    }

	    if (field.errors.hasOwnProperty('minlength')) {
	      config['minlength'] = `Минимальное количество сиволов ${ field.errors.minlength.requiredLength}`;
	    }
	    if (field.errors.hasOwnProperty('maxlength')) {
	      config['maxlength'] = `Максимальное количество сиволов ${ field.errors.maxlength.requiredLength}`;
	    }

	    Object.keys(field.errors).forEach((error: string) => {
	      errors.push(config[error]);
	    });

	    return errors;
  }
}
