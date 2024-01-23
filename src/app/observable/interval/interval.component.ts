import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSubscription:any = Subscription;

  constructor (private _designUtility: DesignUtilityService) { }

  ngOnInit () {

    // const broadCastVideos = interval(1000);
    // timer(delay, interval)
    const broadCastVideos = timer(5000, 1000);

    this.videoSubscription =  broadCastVideos.subscribe(res => {
      this.obsMsg = 'Video ' + res;
      this._designUtility.elAppend(this.obsMsg, 'el-append');
      this._designUtility.elAppend(this.obsMsg, 'el-append2');
      this._designUtility.elAppend(this.obsMsg, 'el-append3');

      if(res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    })

  }

}
