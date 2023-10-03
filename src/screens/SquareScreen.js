import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const shouldChangeColor = (colorValue, amount) => {
  const MAX_VALUE = 255;
  const MIN_VALUE = 0;

  return colorValue + amount <= MAX_VALUE && colorValue + amount >= MIN_VALUE;
}

const reducer = (state, action) => {

  switch (action.type) {
    case 'change_red':
      return shouldChangeColor(state.red, action.payload)
        ? { ...state, red: state.red +  action.payload }
        : state;
    case 'change_green':
      return shouldChangeColor(state.green, action.payload)
        ? { ...state, green: state.green +  action.payload }
        : state;
    case 'change_blue':
      return shouldChangeColor(state.blue, action.payload)
        ? { ...state, blue: state.blue +  action.payload }
        : state;
    default:
      return state;
  }
}


const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

  console.log(state);

  return (
    <View>
      <ColorCounter
        color="red"
        increaseColor={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
        decreaseColor={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT * -1 })}
      />
      <ColorCounter
        color="green"
        increaseColor={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
        decreaseColor={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT * -1 })}
      />
      <ColorCounter
        color="blue"
        increaseColor={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
        decreaseColor={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT * -1 })}
      />

      <View
        style={{
          ...styles.colorBox,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
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
