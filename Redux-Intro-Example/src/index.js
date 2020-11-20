
//base glue to call together the application

// Calls upon all dependencies and requirements to load the entire application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import reducers from './reducers'
// Anything that is in { } is called a named import all others are the default imports
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//Rendering the Application and creating a Store of state data to be used within the App
ReactDOM.render(
<Provider store={createStore(reducers)}>
    <App />
</Provider>, document.querySelector('#root'));
