import React from 'react'
import { hydrate } from 'react-dom'
import Routes from './routes'

globalThis.React = React

hydrate(<Routes />, document.querySelector('#app'))