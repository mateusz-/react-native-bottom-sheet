"use strict";

import React, { memo, useCallback, useMemo } from 'react';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { KEYBOARD_STATE } from '../../constants';
import { useBottomSheetInternal } from '../../hooks';
import { styles } from './styles';
import { jsx as _jsx } from "react/jsx-runtime";
function BottomSheetFooterComponent({
  animatedFooterPosition,
  bottomInset = 0,
  style,
  children
}) {
  //#region hooks
  const {
    animatedFooterHeight,
    animatedKeyboardState
  } = useBottomSheetInternal();
  //#endregion

  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => {
    let footerTranslateY = animatedFooterPosition.value;

    /**
     * Offset the bottom inset only when keyboard is not shown
     */
    if (animatedKeyboardState.value !== KEYBOARD_STATE.SHOWN) {
      footerTranslateY = footerTranslateY - bottomInset;
    }
    return {
      transform: [{
        translateY: Math.max(0, footerTranslateY)
      }]
    };
  }, [bottomInset, animatedKeyboardState, animatedFooterPosition]);
  const containerStyle = useMemo(() => [styles.container, style, containerAnimatedStyle], [style, containerAnimatedStyle]);
  //#endregion

  //#region callbacks
  const handleContainerLayout = useCallback(({
    nativeEvent: {
      layout: {
        height
      }
    }
  }) => {
    animatedFooterHeight.value = height;
  }, [animatedFooterHeight]);
  //#endregion

  return children !== null ? /*#__PURE__*/_jsx(Animated.View, {
    onLayout: handleContainerLayout,
    style: containerStyle,
    children: children
  }) : null;
}
const BottomSheetFooter = /*#__PURE__*/memo(BottomSheetFooterComponent);
BottomSheetFooter.displayName = 'BottomSheetFooter';
export default BottomSheetFooter;
//# sourceMappingURL=BottomSheetFooter.js.map