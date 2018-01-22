//Declaramos el type State
export type State = {
  initialized: boolean;
  status: ?sting;
};

const initialState = {
  initialized: false,
  status: '0 - Not initialized'
};

function app(state: State = initialState, action): State {
  if (action.type === 'APP_RAW') {
    return initialState;
  } else if (action.type === 'APP_INITIALIZING') {
    return {
      initialized: false,
      status: '1 - Initializing'
    }
  }
  return state;
}

module.exports = app;
