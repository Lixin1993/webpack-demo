import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'reducer/index'
import Count from './count'

const store = createStore(rootReducer)

const App = () => (
  <Provider store={store}>
    <Count initCount={2} />
  </Provider>
)

export default App
