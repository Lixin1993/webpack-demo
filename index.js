import React from 'react'
import ReactDOM from 'react-dom'
import Count from './src/page/index'

const App = () => <Count initCount={2} />

ReactDOM.render(<App />, document.getElementById('app'))
