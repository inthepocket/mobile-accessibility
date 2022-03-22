import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import Body from '../../components/Body';
import ToggleAccessibilityButton from '../../components/ToggleAccessibilityButton';
import useAccessible from '../../hooks/useAccessible';
import useLiveRegion from '../../hooks/useLiveRegion';
import { getBetween } from '../../utils/number';

function useTemperature(refreshMs: number | null) {
  const [temperature, setTemperature] = useState(23.4);
  useEffect(() => {
    if (!refreshMs) {
      return;
    }
    const id = setInterval(() => {
      setTemperature(getBetween(18, 35, 1));
    }, refreshMs);

    return () => clearInterval(id);
  }, [refreshMs]);

  return temperature;
}

const Live = () => {
  const [updating, setUpdating] = useState(true);

  const temperature = useTemperature(updating ? 5000 : null);

  const { ref: liveRef, prop: accessibilityLiveRegion } = useLiveRegion(temperature, 'polite');
  const a11y = useAccessible({ accessibilityLiveRegion });

  return (
    <>
      <View style={{ paddingVertical: 10, paddingHorizontal: 20 }}>
        <Body style={{ textAlign: 'center' }} {...a11y} ref={liveRef}>
          Current temperature: {temperature}℃
        </Body>
        <Button
          title={`${updating ? '⏸ Pause' : '▶️ Enable'} updates`}
          onPress={() => setUpdating(u => !u)}
        />
      </View>
      <ToggleAccessibilityButton />
    </>
  );
};

Live.title = 'Live regions / Real time support';
Live.description = 'Notify users of live/background updates happening to the content on the screen';

export default Live;
