import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Welcome extends Component {

    componentDidMount() {
        this.props.initTheWelcomeMessage();
    }

    render() {

        const { welcome_message } = this.props;

        return (
            <View testID="welcome" style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone to open the developer menu.</Text>
                <Text>{welcome_message}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#84DBB9',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 9
    },
 });