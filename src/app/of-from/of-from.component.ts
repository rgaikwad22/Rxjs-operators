import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from '../services/design-utility/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsge : any;
  constructor (private _designUtility: DesignUtilityService) {}
  ngOnInit(): void {
    const obs1 = of('Anup', 'Shekhar', 'Sharma');
    obs1.subscribe(res => {
      this._designUtility.elAppend(res, 'elcontainer');
    })

    const obs2 = of({a: 'Anup', b: 'Shekhar', c: 'Sharma'});
    obs2.subscribe(res => {
      this.obsMsge = res;
    })

    //From - Array

    const obs3 = from(['Uxtrendz', 'John', 'Alex']);

    obs3.subscribe(res => {
      this._designUtility.elAppend(res, 'elcontainer3');
    })

    //From - Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved')
      }, 3000);
    })

    // promise.then(res => {
    //   console.log(res);
    // })

    const obs4 = from(promise);
    obs4.subscribe(res => {
      // console.log(res)
      this._designUtility.elAppend(res, 'elcontainer4');
    })


    //From - String
    const obs5 = from('Welcom to UxTrendz');
    obs5.subscribe(res => {
      // console.log(res)
      this._designUtility.elAppend(res, 'elcontainer5');
    })
  }
}
