import * as gate from '../actions/gate';
import { GateModel, FlightModel, IGateModel, IFlightModel } from '../gate.model';

export interface State {
    selectedGate: GateModel,
    selectedFlight: FlightModel
}

const initialState: any = {
  selectedGate: GateModel,
  selectedFlight: FlightModel
};

export function reducer(state: State = initialState, action: gate.Actions): State {
  switch (action.type) {
   case gate.UPDATE_GATE: {
      const query = action.payload;

      return {
        ...state,
        selectedGate: query
      };
    }
    case gate.UPDATE_SELECTED_FLIGHT: {
      const query = action.payload;

      return {
        ...state,
        selectedFlight: query
      };
    }
    case gate.SELECTED_GATE:
    case gate.SELECTED_GATE:
    default: {
      return state;
    }
  }
}

export const getGate = (state: State) => state.selectedGate;
