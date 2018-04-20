import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  	'./app.component.css', 
  	'./__header/app__header.css', './__header/_theme/app__header_theme.css']
})
export class AppComponent {
  title = 'remittance';

  constructor(){
  	console.log(location)
  }




}
