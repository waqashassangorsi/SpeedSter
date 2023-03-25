import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonComp = ({
  text = 'DONE',
  onPress = () => {},
  disabled = false,
  btnstyle = {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        ...styles.container,
        backgroundColor: !disabled ? 'green' : 'gray',
        ...btnstyle,
      }}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    height: 42,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
  },
});
