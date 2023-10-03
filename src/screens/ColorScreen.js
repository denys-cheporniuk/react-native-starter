import React, { useState } from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native'

const generateRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

const ColorsScreen = () => {
  const [colors, setColors] = useState([])

  const addNewColor = () => {
    const randomColor = generateRandomColor();

    setColors([...colors, randomColor])
  }

  return (
    <View>
      <Button
        title="Add new color"
        onPress={addNewColor}
      />

      <FlatList
        keyExtractor={color => color}
        data={colors}
        renderItem={({ item }) => (
          <View
            style={{
              ...styles.colorBox,
              backgroundColor: item,
            }}
          />
        )}
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

export default ColorsScreen;
