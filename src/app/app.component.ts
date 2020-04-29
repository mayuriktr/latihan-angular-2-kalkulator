import { Component } from '@angular/core';
import {GlobSerService} from './glob-ser2.service';
import { Router } from '@angular/router';
import {OperatorComponent} from './operator/operator.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data : String;
  number = 0;
  angkainputan = "";
  name = 'Kevin Reynaldi';

 
  constructor(private router:Router){}
   hasil(){
    this.router.navigate(['/operator']);
  }

  angka7(){
    this.number = 7;
    this.angkainputan += "7";

  }

  angka8(){
    this.number = 8;
    this.angkainputan += "8";

  }
    angka9(){
    this.number = 9;
    this.angkainputan += "9";

  }
    angka4(){
    this.number = 4;
    this.angkainputan += 4;

  }
    angka5(){
    this.number = 5;
    this.angkainputan += "5";

  }
    angka6(){
    this.number = 6;
    this.angkainputan += "6";

  }
    angka1(){
    this.number = 1;
    this.angkainputan += "1";

  }

    angka2(){
    this.number = 2;
    this.angkainputan += "2";

  }

    angka3(){
    this.number = 3;
    this.angkainputan += "3";

  }

  minus(){
    this.angkainputan += "-";
  }
  plus(){
      this.angkainputan += "+";

  }
  
  kali(){
      this.angkainputan += "*";
  }
}
