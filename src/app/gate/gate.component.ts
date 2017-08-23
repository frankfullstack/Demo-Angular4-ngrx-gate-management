import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { I18nService } from '../core/i18n.service';
import { NgIf } from '@angular/common';
import { IFlightModel, IGateModel, GateModel, FlightModel } from 'app/gate/gate.model';
import { GateFlightListComponent } from './flightlist/FlightList.component';
import { FlightdetailComponent } from './flightdetail/flightdetail.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { CountdownComponent } from '../shared/countdown/countdown.component';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { GateService } from './gate.service';
import { Store } from '@ngrx/store';
import * as fromGate from './reducers';
import * as Gate from './actions/gate';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-gate',
  templateUrl: './gate.component.html',
  styleUrls: ['./gate.component.scss']
})


export class GateComponent implements OnInit {
  lstGate: GateModel[];
  selectedGate: GateModel;
  selectedFlight: FlightModel;
  state = 'inactive';

  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  todos$: Observable<GateModel>;
  constructor(private i18nService: I18nService, private modalService: NgbModal, private gateService: GateService
    , private store: Store<fromGate.GateState>) {
    this.selectedGate = new GateModel('Select Gate', null);
    this.myOptions = [
            { id: 1, name: 'Gate A1 - Device 1' },
            { id: 2, name: 'Gate A1 - Device 2' },
            { id: 3, name: 'Gate A1 - Device 3' },
        ];
    // this.gateService.getGateApi()
    // .finally(() => {
    //   // this.isLoading = false;
    // })
    // .subscribe((lstGate: GateModel[]) => { this.lstGate = lstGate; });

    this.lstGate = new Array<GateModel>(
      new GateModel("C1", new Array<FlightModel>(
        new FlightModel("Flight1", "Seq1", "Transfering", "By Row", "Rows 1-10", new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel("Flight2", "Seq2", "Boarding", "By Row", "Rows 2-10", new Date(2017, 8, 20, 20 , 10, 20)),
        new FlightModel("Flight3", "Seq3", "Fueling", "By Row", "Rows 3-10", new Date(2017, 9, 20, 15 , 23, 20)),
        new FlightModel("Flight4", "Seq4", "Boarding", "By Row", "Rows 4-10", new Date(2017, 9, 20, 15 , 23, 20)),
        new FlightModel("Flight5", "Seq5", "Boarding", "By Row", "Rows 5-10", new Date(2017, 8, 5, 15 , 23, 20)),
        new FlightModel("Flight6", "Seq6", "OnBoard", "By Row", "Rows 6-10", new Date(2017, 8, 4, 20 , 23, 20)),
        new FlightModel("Flight7", "Seq7", "Transfering", "By Row", "Rows 7-10", new Date(2017, 8, 4, 14 , 23, 20)),
        new FlightModel("Flight8", "Seq8", "Fueling", "By Row", "Rows 8-10", new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel("Flight9", "Seq8", "Fueling", "By Row", "Rows 8-10", new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel("Flight10", "Seq9", "Fueling", "By Row", "Rows 16-10", new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel("Flight11", "Seq10", "Fueling", 'By Row', 'Rows 13-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight12', 'Seq11', 'Fueling', 'By Row', 'Rows 11-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight13', 'Seq12', 'Fueling', 'By Row', 'Rows 12-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight14', 'Seq13', 'Fueling', 'By Row', 'Rows 12-10', new Date(2017, 8, 20, 15 , 23, 20))
      )),
      new GateModel('B3', new Array<FlightModel>(
        new FlightModel('Flight1', 'Seq1', 'Transfering', 'By Row', 'Rows 1-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight2', 'Seq2', 'Boarding', 'By Row', 'Rows 2-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight3', 'Seq3', 'Fueling', 'By Row', 'Rows 3-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight4', 'Seq4', 'Boarding', 'By Row', 'Rows 4-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight5', 'Seq5', 'Boarding', 'By Row', 'Rows 5-10', new Date(2017, 8, 20, 15 , 23, 20)),
        new FlightModel('Flight6', 'Seq6', 'OnBoard', 'By Row', 'Rows 6-10', new Date(2017, 8, 20, 15 , 23, 20)),
      )),
      new GateModel('D9', new Array<FlightModel>(
        new FlightModel('Flight1', 'Seq1', 'Transfering', 'By Row', 'Rows 1-10', new Date(2017, 10, 11, 10, 10, 20))
      ))
    );
  }

  ngOnInit() {

  }

  onGateChange(gate: GateModel): void {
    this.selectedGate = gate;
    this.store.dispatch(new Gate.UpdateGateAction(gate));
  }
  selectFlight(flight: FlightModel) {
    this.selectedFlight = flight;
    // trigger some animation and scroll to flight detail
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    // this.store.select(fromGate.getSelectedGate).subscribe(
    //     function (x: GateModel) {
    //     console.log('Next: ' + x);
    //   });

  }
  onChange(asd: any) {
    console.log(asd);
  }
}
