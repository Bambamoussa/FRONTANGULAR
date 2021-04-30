import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() { }
  value:string=""
  setValue(value:string){
    this.value=value
  }
  getValue(){
    return this.value
  }
  public stringVar=new Subject<string>();
  getObservable():Subject<string>{
    return this.stringVar
  }

}
