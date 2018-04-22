import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  	'./app.component.css', 
  	'./__title/app__title.css', 
  	'./__link/app__link.css', './__link/_theme/app__link_theme.css',
  	'./__navigation/app__navigation.css',
  	'./_theme/app_theme.css'
  	]
})
export class AppComponent {
  title = 'remittance';

  constructor(){
  	console.log(location)
  }




}
