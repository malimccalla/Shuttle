import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { API_KEY } from './secrets';
import reducers from './reducers';
import SignupPage from './components/SignupPage';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: API_KEY,
      authDomain: 'shuttle-e0249.firebaseapp.com',
      databaseURL: 'https://shuttle-e0249.firebaseio.com',
      storageBucket: 'shuttle-e0249.appspot.com',
      messagingSenderId: '716012134149'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <SignupPage />
      </Provider>
    );
  }
}

export default App;
