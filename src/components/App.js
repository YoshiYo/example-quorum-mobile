import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import I18n from 'ex-react-native-i18n';
import Welcome from '../_containers/welcome/welcome';
import Header from './/header/header';

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
    this.setState({appIsReady: true }); // when all above promises above are resolved
  }

  render() {

    //console.log(I18n);
    console.log(this.props);

    if (!this.state.appIsReady) {
      <View style={styles.container}>
        <Header />
          <Text>{I18n.t('greeting')}</Text>
        <Welcome />
      </View>
    }
    return (
      // Adding a store to give data to the app
      // It comes from reducers
      // Provider function envelopp the Global App
        <View style={styles.container}>
          <Header />
            <Text>{I18n.t('greeting.test')}</Text>
          <Welcome />
        </View>
    );
  }
}

I18n.fallbacks = true
I18n.translations = {
  en: {
    greeting: {
      test: 'Hello!'
    }
  },
  fr: {
    greeting: {
      test: 'Bonjour !'
    }
  }
};

export default App;
