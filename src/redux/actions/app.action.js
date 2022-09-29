import {
  LOADER_DISPLAY_OFF,
  LOADER_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
} from '../types';

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}

export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
    payload: null,
  };
}
export function errorOn(err) {
  return {
    type: ERROR_DISPLAY_ON,
    payload: err,
  };
}
