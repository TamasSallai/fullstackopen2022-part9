import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { reducer, StateProvider } from './state'

ReactDOM.render(
  <Router>
    <StateProvider reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById('root')
)
