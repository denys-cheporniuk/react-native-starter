import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 5;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const increaseColor = (fn, colorValue) => {
    if (colorValue <= 255) {
      fn(colorValue + COLOR_INCREMENT);
    }
  }

  const decreaseColor = (fn, colorValue) => {
    if (colorValue > 0) {
      fn(colorValue - COLOR_INCREMENT);
    }
  }

  console.log(`rgb(${red},${green},${blue})`);

  return (
    <View>
      <ColorCounter
        color="red"
        increaseColor={() => increaseColor(setRed, red)}
        decreaseColor={() => decreaseColor(setRed, red)}
      />
      <ColorCounter
        color="green"
        increaseColor={() => increaseColor(setGreen, green)}
        decreaseColor={() => decreaseColor(setGreen, green)}
      />
      <ColorCounter
        color="blue"
        increaseColor={() => increaseColor(setBlue, blue)}
        decreaseColor={() => decreaseColor(setBlue, blue)}
      />

      <View
        style={{
          ...styles.colorBox,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  colorBox: {
    height: 100,
    width: 100,
  }
})

export default SquareScreen;
