import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'core-js/es7/string';

import 'rxjs/add/operator/takeWhile';

import * as moment from 'moment';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {
  @Input() days: number;
  @Input() hours: number;
  @Input() minutes: number;
  @Input() seconds: number;
  timer: Observable<number>;
  realTime: any;

  daysLeft: string;
  hoursLeft: string;
  minutesLeft: string;
  secondsLeft: string;
  constructor() {

  }

  ngOnChanges(duration: any) {
    this.realTime = moment.duration({
        seconds: duration.seconds.currentValue,
        minutes: duration.minutes.currentValue,
        hours: duration.hours.currentValue,
        days: duration.days.currentValue,
        weeks: 0,
        months: 0,
        years: 0
    });
    this.timer = Observable.timer(1, 1000)
      .takeWhile((x) => this.realTime.asSeconds() > 0);
    this.startTimer();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.timer.unsubscribe();
  }
  private startTimer() {
    this.timer
      .subscribe((x) => {
        this.realTime.subtract(1, 's');
        this.calcRemTime();
      });
  }

  private calcRemTime() {
    this.daysLeft = String(this.realTime.days());
    this.hoursLeft = String(this.realTime.hours()).padStart(2, '0');
    this.minutesLeft = String(this.realTime.minutes()).padStart(2, '0');
    this.secondsLeft = String(this.realTime.seconds()).padStart(2, '0');
  }
}
