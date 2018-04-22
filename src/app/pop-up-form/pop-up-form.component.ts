import { Component, OnInit, Input } from '@angular/core';
import { PopUpInfo } from '../data-model';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: [
	  './pop-up-form.component.css', './_theme/pop-up-form_theme.css',
	  './__message/pop-up-form__message.css',
	  './_status/pop-up-form_status.css',
   ]
})
export class PopUpFormComponent implements OnInit {

	@Input() info: PopUpInfo;

  constructor() { }

  ngOnInit() {
  }

}
