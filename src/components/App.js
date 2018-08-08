import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import I18n from 'ex-react-native-i18n';
import Welcome from '../_containers/welcome/welcome';
import Header from './/header/header';
import languages from '../../static/lang/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
});

class App extends Component {

  state = {
    appIsReady: false,
  };

  async componentWillMount() {
    const [initI18n] = await Promise.all([
      I18n.initAsync(),
      // I persist the store on a regular basis, and load it here at app startup
      // load assets and fonts here...
    ]);
    this.props.setupI18n(I18n);
    I18n.fallbacks = true
    this.setState({appIsReady: true }); // when all above promises above are resolved
  }

  render() {

    //console.log(I18n);

    if (!this.props.langReady) {
      return(
        <View style={styles.container}>
        </View>
      )
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

I18n.translations = {
  ...languages
};

export default App;
