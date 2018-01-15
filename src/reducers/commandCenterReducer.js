
import initialState from './initialState';
import objectAssign from 'object-assign';
import * as CONSTANTS from '../constants/actionTypes';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function commandCenterReducer(state = initialState.commandCenter, action) {
  switch (action.type) {
    case CONSTANTS.BUILD_DATA:
    let state_ful = objectAssign({}, state, {buildBlob: action.data.data.builds,health:action.data.data.healthReport[0]});
    return state_ful;

    case CONSTANTS.CURRENT_BUILD_DATA:
    let current_state = objectAssign({}, state, {currentBuildDetails: action.data.data});
    debugger;
    return current_state;

    default:
      return state;
  }
}
