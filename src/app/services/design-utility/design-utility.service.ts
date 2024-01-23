import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  elAppend (increment: any, elContainer: string) {
    let el = document.createElement('li');
    el.innerHTML = increment;
    document.getElementById(elContainer)?.appendChild(el);
  }
  
}
