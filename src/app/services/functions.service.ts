import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionsService {

  constructor() { }

  scroll(y:string){
    y="#"+y
    let x = document.querySelector(y);
    if (x){
    x.scrollIntoView();
    } 
}
}
