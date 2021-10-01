import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import blinder from 'color-blind';
import Body from '../../components/Body';
import ToggleAccessibilityButton from '../../components/ToggleAccessibilityButton';

enum Deficiencies {
  Protanopia = 'protanopia',
  Protanomaly = 'protanomaly',
  Deuteranomaly = 'deuteranomaly',
  Deuteranopia = 'deuteranopia',
  Tritanomaly = 'tritanomaly',
  Tritanopia = 'tritanopia',
  Achromatomaly = 'achromatomaly',
  Achromatopsia = 'achromatopsia',
}

function getBlindedColor(color: string, deficiency: Deficiencies | null) {
  switch (deficiency) {
    case Deficiencies.Protanopia:
      return blinder.protanopia(color);
    case Deficiencies.Protanomaly:
      return blinder.protanomaly(color);
    case Deficiencies.Deuteranomaly:
      return blinder.deuteranomaly(color);
    case Deficiencies.Deuteranopia:
      return blinder.deuteranopia(color);
    case Deficiencies.Tritanomaly:
      return blinder.tritanomaly(color);
    case Deficiencies.Tritanopia:
      return blinder.tritanopia(color);
    case Deficiencies.Achromatomaly:
      return blinder.achromatomaly(color);
    case Deficiencies.Achromatopsia:
      return blinder.achromatopsia(color);
    default:
      return color;
  }
}

const ColorDeficiency = () => {
  const [deficiency, setDeficiency] = useState<Deficiencies | null>(null);
  const [color, setColor] = useState('#ff0');

  return (
    <>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginVertical: 20,
            flexWrap: 'wrap',
          }}
        >
          <Button title="None" onPress={() => setDeficiency(null)} style={{ marginVertical: 5 }} />
          {Object.values(Deficiencies).map(def => {
            return (
              <Button
                title={def}
                key={def}
                onPress={() => setDeficiency(def)}
                style={{
                  marginVertical: 5,
                }}
              />
            );
          })}
        </View>
        <Input onChangeText={c => setColor(c)} value={color} />
        <Body>Viewing with deficiency '{deficiency || 'none'}'</Body>
        <View
          style={{
            backgroundColor: getBlindedColor(color, deficiency),
            width: 200,
            height: 200,
          }}
        />
      </ScrollView>
      <ToggleAccessibilityButton />
    </>
  );
};

ColorDeficiency.title = 'Color deficiencies';
ColorDeficiency.description = 'Simulate different color deficiencies';

export default ColorDeficiency;
