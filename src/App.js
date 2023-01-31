import axios from 'axios'
import React, { useState } from 'react'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// import reducer from './state'

import Layout from './components/Layout'
import Header from './components/Header'
import Lyrics from './components/Lyrics'

import './main.sass'

function App() {
  const [loading, setLoading] = useState(false)
  const [song, setSong] = useState({})
  const [error, setError] = useState(false)

  // useEffect(() => {
  //   if (!props.artist || !props.song) return

  //   setError(false)
  //   setIsLoading(true)

  //   const url =
  //     process.env.REACT_APP_API + `artist=${props.artist}&song=${props.song}`

  //   axios.get(url).then((res) => {
  //     if (res.status !== 200) {
  //       setError(true)
  //       setLoading(false)

  //       return
  //     }

  //     console.log(res.data)

  //   })
  // }, [props.artist, props.song])

  async function handleSearch(data) {
    const { artist, song } = data

    if (!artist || !song) return

    setError(false)
    setLoading(true)
    setSong({})

    const url = process.env.REACT_APP_API + `artist=${artist}&song=${song}`

    try {
      const res = await axios.get(url)

      setSong(res.data.data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return (
    <Layout>
      <Header search={handleSearch} />
      <Lyrics
        isLoading={loading}
        data={Object.keys(song).length > 0 ? song : false}
        error={error}
      />
    </Layout>
  )
}

export default App
