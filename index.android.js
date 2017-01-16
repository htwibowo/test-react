/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/photograph.jpg')}
          style={styles.photo}
        />
        <Text style={styles.welcome}>
          Harry Tri Wibowo
        </Text>
        <Text style={styles.instructions}>
          Refactory 1st Batch &middot; Camorra
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  photo: {
    width: 200,
    height: 200,
  }
});

AppRegistry.registerComponent('Test', () => Test);
