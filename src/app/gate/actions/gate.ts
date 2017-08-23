import { Action } from '@ngrx/store';
import { GateModel, FlightModel } from '../gate.model';

export const SELECTED_GATE = '[Gate] Selected';
export const SELECTED_FLIGHT = '[Flight] Selected';
export const UPDATE_GATE = '[Gate] Updated';
export const UPDATE_SELECTED_FLIGHT = '[Flight] Updated';
/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class GetSelectedGateAction implements Action {
  readonly type = SELECTED_GATE;
  constructor(public payload: GateModel) {}
}
export class GetSelectedFlightAction implements Action {
  readonly type = SELECTED_FLIGHT;
  constructor(public payload: FlightModel) {}
}
export class UpdateGateAction implements Action {
  readonly type = UPDATE_GATE;
  constructor(public payload: GateModel) {}
}

export class UpdateSelectedFlightAction implements Action {
  readonly type = UPDATE_SELECTED_FLIGHT;
  constructor(public payload: FlightModel) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions =
| GetSelectedGateAction
| UpdateGateAction
| UpdateSelectedFlightAction
| GetSelectedFlightAction;
