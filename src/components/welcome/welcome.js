import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#84DBB9',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 9,
  },
});

export default class Welcome extends Component {
  componentDidMount() {
    const { initTheWelcomeMessage } = this.props;
    initTheWelcomeMessage();
  }

  render() {
    const { welcomeMessage } = this.props;
    const { text } = this.props;

    return (
      <View testID="welcome" style={styles.container}>
        <Text>
          Open up App.js to start working on your app!
        </Text>
        <Text>
          Changes you make will automatically reload.
        </Text>
        <Text>
          Shake your phone to open the developer menu.
        </Text>
        <Text>
          {`${text.hello} ${welcomeMessage} !`}
        </Text>
      </View>
    );
  }
}

Welcome.propTypes = {
  welcomeMessage: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  initTheWelcomeMessage: PropTypes.func.isRequired,
};
