
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import htmlPage from './htmlPage'

if (typeof document !== 'undefined') {
  ReactDOM.render(
    <App />,
    document.getElementById('app'), // eslint-disable-line
  )
}

export default (locals) => {
  const { renderToString } = require('react-dom/server') // eslint-disable-line
  return htmlPage({
    app: renderToString(<App />),
    main: locals.assets.main,
  })
}
