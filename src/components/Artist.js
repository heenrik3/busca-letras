import axios from 'axios'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Spinner from './Spinner'

function Artist(props) {
  // console.log(props)
  const [isLoading, setIsLoading] = useState(false)
  const [img, setImg] = useState('')
  const [error, setError] = useState(false)
  useEffect(() => {
    if (!props.artist) return

    setError(false)
    setIsLoading(true)

    const url = process.env.REACT_APP_API + `cover?artist=${props.artist}`

    axios
      .get(url)
      .then((res) => {
        if (res.status !== 200) {
          setError(true)
          return
        }

        setImg(res.data.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(true)
        setIsLoading(false)
      })
  }, [props.artist])

  if (isLoading)
    return (
      <picture className="lyrics__pic">
        <Spinner />
      </picture>
    )

  if (error) {
    return (
      <picture className="lyrics__pic">
        <h1>Imagem não encontrada.</h1>
      </picture>
    )
  }

  return (
    <picture className="lyrics__pic">
      <img
        className="lyrics__img"
        src={img || 'artist.jpg'}
        alt="artist pic"
      ></img>
    </picture>
  )
}

function mapStateToProps(state) {
  return {
    artist: state.data.artist,
  }
}

export default connect(mapStateToProps)(Artist)
