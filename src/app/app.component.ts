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
  
  name = 'Kevin Reynaldi';

 
  constructor(private router:Router){}
   hasil(){
    this.router.navigate(['/operator']);
  }

  angka7(){
    this.number = 7;
    

  }

}
