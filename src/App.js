import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './state'

import Layout from './components/Layout'
import Header from './components/Header'
import Lyrics from './components/Lyrics'

import './main.sass'

function App() {
  return (
    <Provider store={createStore(reducer)}>
      <Layout>
        <Header />
        <Lyrics />
      </Layout>
    </Provider>
  )
}

export default App
