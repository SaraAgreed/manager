import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDSJBSbqE6o3RD97fgwF9SGn4Og6tLs-Tg',
            authDomain: 'manager-c96a3.firebaseapp.com',
            databaseURL: 'https://manager-c96a3.firebaseio.com',
            projectId: 'manager-c96a3',
            storageBucket: 'manager-c96a3.appspot.com',
            messagingSenderId: '163744200894'
          };

          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
               <Router />
            </Provider>
        );
    }
}
export default App;