import { Platform } from 'react-native'

/*
 * action types
 */
const APP_RAW = 'APP_RAW'
const APP_INITIALIZING = 'APP_INITIALIZING'

/*
 * action creators
 */
function appSimpleState(state) {
  return {
    type: state,
  }
}

/***********************/
/**      COMMON       **/
/***********************/
function appInitialize() {
  return function(dispatch) {
    dispatch(appSimpleState(APP_INITIALIZING))
  }
}

module.exports = {appInitialize}
