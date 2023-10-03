import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="increment"
        onPress={() => dispatch({ type: 'increment', payload: COUNTER_INCREMENT })}
      />
      <Button
        title="decrement"
        onPress={() => dispatch({ type: 'decrement', payload: COUNTER_INCREMENT })}
      />
      <Text>Counter count: { count }</Text>
    </View>
  );
};

const styles = StyleSheet.create({})

export default CounterScreen;
