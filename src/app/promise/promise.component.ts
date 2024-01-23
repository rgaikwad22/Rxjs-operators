import { Component } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent {

  constructor() { };
  promiseVal: any;

  DellAvailable() {
    return true;
  }

  HpAvailable() {
    return false;
  }

  ngOnInit() {
    let buyLaptop = new Promise((resolve, reject) => {
      // resolve('promise is resolved');
      // reject('promise is reject');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve('Dell is Purchsed!');
        }, 2000);
      } else if (this.HpAvailable()) {
        return setTimeout(() => {
          resolve('Hp is Purchased!');
        }, 2000);
      } else {
        return setTimeout(() => {
          reject('Laptop not available!');
        }, 2000);
      }
    });

    buyLaptop.then(res => {
      console.log('success', res)
      this.promiseVal = res;
    }).catch(res => {
      console.log('error', res)
      this.promiseVal = res;
    })
  }


  myFunction() {
    console.log("My clicked")
  }

}
