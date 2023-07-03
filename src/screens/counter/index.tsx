import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{`Counter: ${count}`}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementCount}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decrementCount}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterText: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CounterScreen;
