import { Component, EventEmitter, OnInit, OnChanges, Input, Output } from '@angular/core';
import { FlightModel, Duration } from '../gate.model';
import * as moment from 'moment';

@Component({
  selector: 'app-flightlist',
  styleUrls: ['../gate.component.scss'],
  templateUrl: './FlightList.component.html'
})

export class GateFlightListComponent implements OnInit, OnChanges {
  @Input() FlightList: FlightModel[];
  @Output() onFlightSelected: EventEmitter<FlightModel>;
  justSelectedFlight: FlightModel;
  constructor() {
    this.onFlightSelected = new EventEmitter<FlightModel>();
  }

  ngOnChanges(flights: any) {
    this.FlightList = flights.FlightList.currentValue && flights.FlightList.currentValue.map(function(x: FlightModel) {
       let total: number = moment.duration(moment(x.DepartureDue).diff(moment())).asMilliseconds();
       const daysLeft = Math.floor(moment.duration(total).asDays());
       total -= daysLeft * 84600 * 1000;
       const hoursLeft = Math.floor(moment.duration(total).asHours());
       total -= hoursLeft * 3600 * 1000;
       const minutesLeft = Math.floor(moment.duration(total).asMinutes());
       total -= minutesLeft * 60 * 1000;
       const secondsLeft = Math.floor(moment.duration(total).asSeconds());
       x.CountdownTime = new Duration(daysLeft, hoursLeft, minutesLeft, secondsLeft);
      return x;
    });
  }

  ngOnInit() {}

  selectFlight(flight: FlightModel) {
    this.onFlightSelected.emit(flight);
    // broad cast Active Item to children
    this.justSelectedFlight = flight;
  }
}
