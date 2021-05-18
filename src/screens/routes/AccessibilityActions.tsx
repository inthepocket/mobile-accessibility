import React, { useRef } from 'react';
import { Swipeable } from 'react-native-gesture-handler';

import expenses from '../../data/expenses';
import SwipeableListItem from '../../components/SwipeableListItem';
import useAccessible from '../../hooks/useAccessible';

const AccessibilityActions = () => {
  const [expense] = expenses(1);
  const { category, description, unit, price } = expense;
  const ref = useRef<Swipeable>(null);

  const actions = {
    left: { label: 'Export', onSwipe: console.log },
    right: { label: 'Delete', onSwipe: console.log },
  };

  const a11y = useAccessible({
    accessible: true,
    accessibilityLabel: category,
    accessibilityActions: [
      { name: actions.left.label, label: actions.left.label },
      { name: actions.right.label, label: actions.right.label },
    ],
    onAccessibilityAction: ({ nativeEvent }) => {
      const action = nativeEvent.actionName;
      switch (action) {
        case actions.left.label:
          ref.current?.openLeft();
          break;
        case actions.right.label:
          ref.current?.openRight();
          break;
      }
    },
  });

  return (
    <SwipeableListItem
      ref={ref}
      title={category}
      subtitle={description}
      leftAction={actions.left}
      rightAction={actions.right}
      {...a11y}
    >
      {unit}
      {price}
    </SwipeableListItem>
  );
};

AccessibilityActions.title = 'Accessibility actions';
AccessibilityActions.description =
  'Support interactions which would otherwise require visual context or are hard to execute (e.g swipe)';

export default AccessibilityActions;
