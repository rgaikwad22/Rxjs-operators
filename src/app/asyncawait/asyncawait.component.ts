import { Component } from '@angular/core';

@Component({
  selector: 'app-asyncawait',
  templateUrl: './asyncawait.component.html',
  styleUrls: ['./asyncawait.component.scss']
})
export class AsyncawaitComponent {

  result1: any = 'Data';
  result2: any = 'Data';
  result3: any = 'Data';
  dell: Object = {
    'brand': 'Dell',
    'hardDisk': '2 TB',
    'color': 'Black'
  };
  // Ex - 01 : with Promise
  buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell)
    }, 3000);
  })

  buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
               .then(response => response.json())
  
  fetch1 () {
    this.result1 = 'Fetching Data...';
    this.buyLaptop.then(res => {
      this.result1 = JSON.stringify(res);
    })
  }

  // Ex - 01 : with Async / Await
  async fetch2 () {
    this.result2 = 'Fetching Data...';

    let data = await this.buyLaptop;
    this.result2 = JSON.stringify(data);
  }

  // Ex - 03 : with Fetch Api
  // promise 
  // fetch3 () {
  //   this.result3 = 'Fetching Data...';

  //   this.buyLaptop2.then(res => {
  //     console.log(res)
  //     this.result3 = JSON.stringify(res);
  //   })
  // }

  async fetch3 () {
    this.result3 = 'Fetching Data...';

    let res = await this.buyLaptop2;

    console.log(res);
    this.result3 = JSON.stringify(res);
  }
}
