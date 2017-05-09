import React, { Component } from 'react'
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import Jotter from '../containers/Jotter'
import JotList from './JotList'

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
  statusBar: {
    height: 20,
    backgroundColor: 'white'
  }
})

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View style={styles.statusBar} />
        <Jotter />
        <JotList />
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App)
