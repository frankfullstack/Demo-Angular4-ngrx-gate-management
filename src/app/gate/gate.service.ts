import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IFlightModel, IGateModel, GateModel, FlightModel } from 'app/gate/gate.model';

const routes = {
  gate: '/gate'
};

@Injectable()
export class GateService {

  constructor(private http: Http) { }

  getGateApi(): Observable<GateModel[]> {
    return this.http.get(routes.gate)
      .map((res: Response) => res.json())
      .map(body => body)
      .catch(() => Observable.of([]));
  }

}
