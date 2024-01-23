import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit{

  @ViewChild('addbtn') addbtn!: ElementRef;
  
  constructor(public _designUtility: DesignUtilityService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit () {
    let count = 1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe(res => {
      let increment = 'Video ' + count++;
      this._designUtility.elAppend(increment, 'el-append');
      this._designUtility.elAppend(increment, 'el-append2');
    });
  }
}