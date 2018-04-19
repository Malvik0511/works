import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up-form',
  templateUrl: './pop-up-form.component.html',
  styleUrls: ['./pop-up-form.component.css']
})
export class PopUpFormComponent implements OnInit {

	@Input() message: string;


  constructor() { }

  ngOnInit() {
  }

}
