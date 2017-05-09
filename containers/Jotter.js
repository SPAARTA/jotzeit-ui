import React, { Component } from 'react'
import {
  Alert,
  AppRegistry,
  Button,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createJot } from '../actions'

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    alignSelf: 'stretch'
  }
})

class Jotter extends Component {

  input({ input: { onChange, ...restInput } }) {
    return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
  }

  submit(values) {
    Alert.alert('okay', values.jot)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <View>
        <Text>Write something:</Text>
        <Field name="jot" component={this.input} />
        <Button
          onPress={handleSubmit(this.submit)}
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

//function mapStateToProps(state) {
//  return {
//    navigationState: state.navigationState
//  };
//}
//do without connecting to store
//export default connect(null, actionCreators)(TodoApp)

export default reduxForm({ form: 'test' })(Jotter)
