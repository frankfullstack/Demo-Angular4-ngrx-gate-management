import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FlightModel, GateModel } from 'app/gate/gate.model';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromGate from '../reducers';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-flightdetail',
  templateUrl: './flightdetail.component.html',
  styleUrls: ['../gate.component.scss'],
  animations: [
    trigger('focusPanel', [
            transition('inactive => active', [
              animate('1s', keyframes([
                style({'border-color': 'transparent'}),
                style({'border-color': '#E13137'}),
                style({'border-color': 'transparent'})
              ]))
            ]),
            transition('active => inactive', [
              animate('1s', keyframes([
                style({'border-color': 'transparent'}),
                style({'border-color': '#E13137'}),
                style({'border-color': 'transparent'})
              ]))
            ]),
        ]),
  ]
})
export class FlightdetailComponent implements OnInit {
  @Input() selectedFlight: FlightModel;
  @Input() selectedGate: GateModel;

  @Input() state: string;

  lstSequense: string[];
  lstStatus: string[];
  constructor(private store: Store<fromRoot.State>) {
    this.lstSequense = ['Seq1', 'Seq2', 'Seq3', 'Seq4', 'Seq5', 'Seq6', 'Seq7'];
    this.lstStatus = ['Boarding', 'Fueling', 'OnBoard', 'Transfering'];
   }

  ngOnInit() {

  }
}
