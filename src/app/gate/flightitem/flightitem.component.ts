import { Component, EventEmitter, OnInit, OnChanges, Input, Output } from '@angular/core';
import { FlightModel, Duration } from '../gate.model';
import * as moment from 'moment';

@Component({
  selector: 'app-flightitem',
  templateUrl: './flightitem.component.html',
  styleUrls: ['../gate.component.scss']
})
export class FlightitemComponent implements OnInit, OnChanges {
  @Input() FlightItem: FlightModel;
  @Input() JustSelectedItem: FlightModel;
  @Output() onFlightSelected: EventEmitter<FlightModel>;
  activeBgColor: string;
  constructor() {
    this.onFlightSelected = new EventEmitter<FlightModel>();
  }

  ngOnChanges(changes: any) {
      this.activeBgColor = this.FlightItem === this.JustSelectedItem ? '#D7D5D5' : '#fff';
  }

  ngOnInit() {
  }


  onSelectFlight(flight: FlightModel) {
    // update selected flight here
    this.onFlightSelected.emit(flight);
    // this.activeBgColor = '#D7D5D5';
  }
}
