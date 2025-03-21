import { type RefObject } from 'react';
import { SCROLLABLE_STATE, SCROLLABLE_TYPE } from '../constants';
import type { Scrollable, ScrollableRef } from '../types';
export declare const useScrollable: () => {
    scrollableRef: RefObject<ScrollableRef>;
    animatedScrollableType: import("react-native-reanimated").SharedValue<SCROLLABLE_TYPE>;
    animatedScrollableContentOffsetY: import("react-native-reanimated").SharedValue<number>;
    animatedScrollableOverrideState: import("react-native-reanimated").SharedValue<SCROLLABLE_STATE>;
    isScrollableRefreshable: import("react-native-reanimated").SharedValue<boolean>;
    setScrollableRef: (ref: ScrollableRef) => void;
    removeScrollableRef: (ref: RefObject<Scrollable>) => void;
};
//# sourceMappingURL=useScrollable.d.ts.map