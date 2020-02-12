import React from 'react';
import { View, StyleSheet } from 'react-native';

const Box = props => {
  return (
    <View style={{ ...styles.cards, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  cards: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Box;
