import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import I18n from 'ex-react-native-i18n';
import PropTypes from 'prop-types';
import Welcome from '../_containers/welcome/welcome';
import Header from './header/header';
import languages from '../../static/lang/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

I18n.translations = {
  ...languages,
};

class App extends Component {
  async componentWillMount() {
    const { setupI18n } = this.props;
    I18n.initAsync();
    I18n.fallbacks = true;
    setupI18n(I18n);
  }

  render() {
    const { langReady } = this.props;

    if (!langReady) {
      return (
        <View style={styles.container} />
      );
    }
    return (
      // Adding a store to give data to the app
      // It comes from reducers
      // Provider function envelopp the Global App
      <View style={styles.container}>
        <Header />
        <Welcome />
      </View>
    );
  }
}

App.propTypes = {
  langReady: PropTypes.bool.isRequired,
};

export default App;
