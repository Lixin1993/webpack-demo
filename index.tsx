import React from 'react'
import ReactDOM from 'react-dom'
import Count from './src/page/index'

const App = () => {
  return <Count initCount={1} />
}

ReactDOM.render(<App />, document.getElementById('app'))