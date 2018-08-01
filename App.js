import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/_store/index';
import Welcome from './src/_containers/welcome/welcome';
import Header from './src/components/header/header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

class App extends Component {
  render() {
    return (
      // Adding a store to give data to the app
      // It comes from reducers
      // Provider function envelopp the Global App
      <Provider store={store}>
        <View style={styles.container}>
          <Header />
          <Welcome />
        </View>
      </Provider>
    );
  }
}

export default App;
