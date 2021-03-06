import * as layout from '../actions/sidebar.actions';

export interface State {
  showSidenav: boolean;
}

const initialState: State = {
  showSidenav: false,
};

export function reducer(state: any = initialState, action: layout.Actions): State {
  switch (action.type) {
    case layout.CLOSE_SIDENAV:
      return {
        showSidenav: false,
      };

    case layout.OPEN_SIDENAV:
      return {
        showSidenav: true,
      };

    default:
      return state;
  }
}

export const getShowSidenav = (state: State) => state.showSidenav;
