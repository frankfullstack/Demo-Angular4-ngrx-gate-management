import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromGate from './gate';

export interface GateState {
  selectedGate: fromGate.State;
  selectedFlight: fromGate.State;
}

// collection of all reducer in gate module
export const reducers = {
  status: fromGate.reducer
};

export const selectGateState = createFeatureSelector<GateState>('gate');

export const selectGateStatusState = createSelector(
  selectGateState,
  (state: GateState) => state.selectedGate
);
export const getSelectedGate = createSelector(
  selectGateStatusState,
  fromGate.getGate
);
