// import axios from 'axios'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Spinner from './Spinner'

function SongInfo(props) {
  const [isLoading, setIsLoading] = useState(false)
  const [artist, setArtist] = useState('')
  const [title, setTitle] = useState('')
  const [lyrics, setLyrics] = useState('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!props.artist || !props.song) return

    setError(false)
    setIsLoading(true)

    const url =
      process.env.REACT_APP_API +
      `lyrics?artist=${props.artist}&song=${props.song}`

    axios
      .get(url)
      .then((res) => {
        if (res.status !== 200) {
          setError(true)
          setIsLoading(false)

          return
        }

        const { artist } = res.data.data
        const { title } = res.data.data
        const { lyrics } = res.data.data

        setArtist(artist)
        setTitle(title)
        setLyrics(lyrics)

        setIsLoading(false)
      })
      .catch((err) => {
        setError(true)
        setIsLoading(false)
      })
  }, [props.artist, props.song])

  if (isLoading) {
    return (
      <div className="lyrics__info">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="lyrics__info">
        <h1>Letra não encontrada 😮‍💨</h1>
      </div>
    )
  }

  if (title === '') {
    return (
      <div className="lyrics__info">
        <h2>Comece buscando uma letra de música! 😁</h2>
      </div>
    )
  }

  return (
    <div className="lyrics__info">
      <span className="lyrics__title">{title}</span>
      <h3 className="lyrics__artist">{artist}</h3>

      <div className="lyrics__text">
        <p className="lyrics__data">{lyrics}</p>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    artist: state.data.artist,
    song: state.data.song,
  }
}

export default connect(mapStateToProps)(SongInfo)
