import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { StateProvider } from './StateProvider'
import reducer, { initialState } from './reducer'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
