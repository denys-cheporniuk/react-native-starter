import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Enter password</Text>

      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize='none'
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />

      {password.length < 5 && (
        <Text>password should be longer then 5 symbols</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderBlock: 'black',
    borderWidth: 1,
  }
})

export default TextScreen;
