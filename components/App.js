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
  }
})

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Jot it down' };
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    Alert.alert('title', this.state.text);
    this.setState({text: ''});
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <View style={{ flex: 0.5, backgroundColor: '#115060' }}></View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline={true}
          style={{
            flex: 6,
            backgroundColor: '#115060',
            color: '#FFFFFF',
            padding: 20,
            fontSize: 50,
            fontFamily: 'AppleSDGothicNeo-Light'
          }}
        />
        <Button
          onPress={this.buttonPressed}
          title="Save Note"
          color="#115060"
          accessibilityLabel="This button saves the note"
          returnKeyType="send"
          style={{ flex: 1 }}
        />
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);

