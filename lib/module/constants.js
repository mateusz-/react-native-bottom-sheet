"use strict";

import { Dimensions, Platform } from 'react-native';
import { Easing } from 'react-native-reanimated';
const {
  height: WINDOW_HEIGHT,
  width: WINDOW_WIDTH
} = Dimensions.get('window');
const {
  height: SCREEN_HEIGHT,
  width: SCREEN_WIDTH
} = Dimensions.get('screen');
var GESTURE_SOURCE = /*#__PURE__*/function (GESTURE_SOURCE) {
  GESTURE_SOURCE[GESTURE_SOURCE["UNDETERMINED"] = 0] = "UNDETERMINED";
  GESTURE_SOURCE[GESTURE_SOURCE["SCROLLABLE"] = 1] = "SCROLLABLE";
  GESTURE_SOURCE[GESTURE_SOURCE["HANDLE"] = 2] = "HANDLE";
  GESTURE_SOURCE[GESTURE_SOURCE["CONTENT"] = 3] = "CONTENT";
  return GESTURE_SOURCE;
}(GESTURE_SOURCE || {});
var SHEET_STATE = /*#__PURE__*/function (SHEET_STATE) {
  SHEET_STATE[SHEET_STATE["CLOSED"] = 0] = "CLOSED";
  SHEET_STATE[SHEET_STATE["OPENED"] = 1] = "OPENED";
  SHEET_STATE[SHEET_STATE["EXTENDED"] = 2] = "EXTENDED";
  SHEET_STATE[SHEET_STATE["OVER_EXTENDED"] = 3] = "OVER_EXTENDED";
  SHEET_STATE[SHEET_STATE["FILL_PARENT"] = 4] = "FILL_PARENT";
  return SHEET_STATE;
}(SHEET_STATE || {});
var SCROLLABLE_STATE = /*#__PURE__*/function (SCROLLABLE_STATE) {
  SCROLLABLE_STATE[SCROLLABLE_STATE["LOCKED"] = 0] = "LOCKED";
  SCROLLABLE_STATE[SCROLLABLE_STATE["UNLOCKED"] = 1] = "UNLOCKED";
  SCROLLABLE_STATE[SCROLLABLE_STATE["UNDETERMINED"] = 2] = "UNDETERMINED";
  return SCROLLABLE_STATE;
}(SCROLLABLE_STATE || {});
var SCROLLABLE_TYPE = /*#__PURE__*/function (SCROLLABLE_TYPE) {
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["UNDETERMINED"] = 0] = "UNDETERMINED";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["VIEW"] = 1] = "VIEW";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["FLATLIST"] = 2] = "FLATLIST";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["SCROLLVIEW"] = 3] = "SCROLLVIEW";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["SECTIONLIST"] = 4] = "SECTIONLIST";
  SCROLLABLE_TYPE[SCROLLABLE_TYPE["VIRTUALIZEDLIST"] = 5] = "VIRTUALIZEDLIST";
  return SCROLLABLE_TYPE;
}(SCROLLABLE_TYPE || {});
var ANIMATION_STATE = /*#__PURE__*/function (ANIMATION_STATE) {
  ANIMATION_STATE[ANIMATION_STATE["UNDETERMINED"] = 0] = "UNDETERMINED";
  ANIMATION_STATE[ANIMATION_STATE["RUNNING"] = 1] = "RUNNING";
  ANIMATION_STATE[ANIMATION_STATE["STOPPED"] = 2] = "STOPPED";
  ANIMATION_STATE[ANIMATION_STATE["INTERRUPTED"] = 3] = "INTERRUPTED";
  return ANIMATION_STATE;
}(ANIMATION_STATE || {});
var ANIMATION_SOURCE = /*#__PURE__*/function (ANIMATION_SOURCE) {
  ANIMATION_SOURCE[ANIMATION_SOURCE["NONE"] = 0] = "NONE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["MOUNT"] = 1] = "MOUNT";
  ANIMATION_SOURCE[ANIMATION_SOURCE["GESTURE"] = 2] = "GESTURE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["USER"] = 3] = "USER";
  ANIMATION_SOURCE[ANIMATION_SOURCE["CONTAINER_RESIZE"] = 4] = "CONTAINER_RESIZE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["SNAP_POINT_CHANGE"] = 5] = "SNAP_POINT_CHANGE";
  ANIMATION_SOURCE[ANIMATION_SOURCE["KEYBOARD"] = 6] = "KEYBOARD";
  return ANIMATION_SOURCE;
}(ANIMATION_SOURCE || {});
var ANIMATION_METHOD = /*#__PURE__*/function (ANIMATION_METHOD) {
  ANIMATION_METHOD[ANIMATION_METHOD["TIMING"] = 0] = "TIMING";
  ANIMATION_METHOD[ANIMATION_METHOD["SPRING"] = 1] = "SPRING";
  return ANIMATION_METHOD;
}(ANIMATION_METHOD || {});
var KEYBOARD_STATE = /*#__PURE__*/function (KEYBOARD_STATE) {
  KEYBOARD_STATE[KEYBOARD_STATE["UNDETERMINED"] = 0] = "UNDETERMINED";
  KEYBOARD_STATE[KEYBOARD_STATE["SHOWN"] = 1] = "SHOWN";
  KEYBOARD_STATE[KEYBOARD_STATE["HIDDEN"] = 2] = "HIDDEN";
  return KEYBOARD_STATE;
}(KEYBOARD_STATE || {});
var SNAP_POINT_TYPE = /*#__PURE__*/function (SNAP_POINT_TYPE) {
  SNAP_POINT_TYPE[SNAP_POINT_TYPE["PROVIDED"] = 0] = "PROVIDED";
  SNAP_POINT_TYPE[SNAP_POINT_TYPE["DYNAMIC"] = 1] = "DYNAMIC";
  return SNAP_POINT_TYPE;
}(SNAP_POINT_TYPE || {});
const ANIMATION_EASING = Easing.out(Easing.exp);
const ANIMATION_DURATION = 250;
const ANIMATION_CONFIGS_IOS = {
  damping: 500,
  stiffness: 1000,
  mass: 3,
  overshootClamping: true,
  restDisplacementThreshold: 10,
  restSpeedThreshold: 10
};
const ANIMATION_CONFIGS_ANDROID = {
  duration: ANIMATION_DURATION,
  easing: ANIMATION_EASING
};
const ANIMATION_CONFIGS = Platform.OS === 'ios' ? ANIMATION_CONFIGS_IOS : ANIMATION_CONFIGS_ANDROID;
const SCROLLABLE_DECELERATION_RATE_MAPPER = {
  [SCROLLABLE_STATE.UNDETERMINED]: 0,
  [SCROLLABLE_STATE.LOCKED]: 0,
  [SCROLLABLE_STATE.UNLOCKED]: Platform.select({
    ios: 0.998,
    android: 0.985,
    default: 1
  })
};
const MODAL_STACK_BEHAVIOR = {
  replace: 'replace',
  push: 'push',
  switch: 'switch'
};
const KEYBOARD_BEHAVIOR = {
  interactive: 'interactive',
  extend: 'extend',
  fillParent: 'fillParent'
};
const KEYBOARD_BLUR_BEHAVIOR = {
  none: 'none',
  restore: 'restore'
};
const KEYBOARD_INPUT_MODE = {
  adjustPan: 'adjustPan',
  adjustResize: 'adjustResize'
};
const KEYBOARD_DISMISS_THRESHOLD = 12.5;
export { GESTURE_SOURCE, SHEET_STATE, ANIMATION_STATE, ANIMATION_METHOD, ANIMATION_SOURCE, SCROLLABLE_TYPE, SCROLLABLE_STATE, KEYBOARD_STATE, SNAP_POINT_TYPE, WINDOW_HEIGHT, WINDOW_WIDTH, SCREEN_HEIGHT, SCREEN_WIDTH, SCROLLABLE_DECELERATION_RATE_MAPPER, MODAL_STACK_BEHAVIOR, KEYBOARD_BEHAVIOR, KEYBOARD_BLUR_BEHAVIOR, KEYBOARD_INPUT_MODE, KEYBOARD_DISMISS_THRESHOLD, ANIMATION_CONFIGS, ANIMATION_EASING, ANIMATION_DURATION };
//# sourceMappingURL=constants.js.map