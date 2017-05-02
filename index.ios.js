/**
 * JotZeit ui (note time)
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

const store = createStore(reducer);

export default class Jotzeit extends Component {

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }

}

AppRegistry.registerComponent('Jotzeit', () => Jotzeit);
