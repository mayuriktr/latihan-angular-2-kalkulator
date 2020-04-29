import { Injectable } from '@angular/core';

@Injectable()
export class GlobSerService {

  constructor() { }
  private Data : String = 'abc';

  public getData(){
    return this.Data;
  }

  public setData(databaru){
    this.Data = databaru;
  }

}