import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'desafio';
  img = "";

  logoCC(val){
    if (val == "4") {      
      this.img = "visa.png";
    }
    if (val == "5") {
      this.img = "master.png";
    }
    if (val == "37") {
      this.img = "american.png";
    }  
    if(val == ""){
      this.img = "";
    }  
  }
}
