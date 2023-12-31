import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.jsx'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
)
