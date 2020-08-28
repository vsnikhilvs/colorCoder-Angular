import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  public hexColor:String ;
  constructor() { }

  convertHEX(color: string){
    let hexCode = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    this.hexColor = ((hexCode && hexCode.length === 4) ? "#" +
    ("0" + parseInt(hexCode[1],10).toString(16)).slice(-2) +
    ("0" + parseInt(hexCode[2],10).toString(16)).slice(-2) +
    ("0" + parseInt(hexCode[3],10).toString(16)).slice(-2) : '');
  }
}
