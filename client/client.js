import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

//configure and create our store
//var store = createStore(reducers, intialstate)
let initialState = {
    todos: [{
        id: 0,
        completed:false,
        text: 'Initial tosofor demo purposes'
    }]
}

let store = configureStore(initialState)

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)