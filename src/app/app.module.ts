import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OperatorComponent } from './operator/operator.component';
import {Routes, RouterModule} from '@angular/router';
import operatorComponentCss from './operator/operator.component.css';

const ROUTES: Routes = [
  {path: 'operator', component:OperatorComponent}

]

@NgModule({
  imports:      [ 
  BrowserModule, 
  FormsModule,
  RouterModule.forRoot (ROUTES) ],
  declarations: [ AppComponent, HelloComponent, OperatorComponent ],
  bootstrap:    [ AppComponent ]
})


export class AppModule {
  

 }
