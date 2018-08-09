import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 100,
    padding: 50,
    backgroundColor: '#5353DE',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Welcome on Quorum !!!
        </Text>
      </View>
    );
  }
}
