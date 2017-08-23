import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as gateAction from '../actions/gate';
import { GateModel } from '../gate.model';

@Injectable()
export class GateEffects {
  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   *
   * The `defer` observable accepts an observable factory function
   * that is called when the observable is subscribed to.
   * Wrapping the database open call in `defer` makes
   * effect easier to test.
   * https://blog.nrwl.io/ngrx-patterns-and-techniques-f46126e2b1e5
   */

//   @Effect()
//   UpdateGateActionAsync$ = this.actions$
//     .ofType(gateAction.UPDATE_GATE)
//     .do(x => console.log('test effect', x));

  constructor(private actions$: Actions) {}
}

