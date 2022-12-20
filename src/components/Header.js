import { useRef } from 'react'
import { connect } from 'react-redux'

import { search } from '../actions'

function Header(props) {
  const artistInputRef = useRef()
  const songInputRef = useRef()

  const clearInput = () => {
    artistInputRef.current.value = songInputRef.current.value = ''
  }

  const handleSearchLyrics = (e) => {
    const artist = artistInputRef.current.value.trim()
    const song = songInputRef.current.value.trim()

    if (!artist || !song) return clearInput()

    props.search({ artist, song })

    clearInput()
  }

  return (
    <header className="header">
      <h1>Busca-letras📄</h1>

      <div className="header__actions">
        <div className="header__input">
          <span>Artista</span>
          <input
            type="text"
            className="artist__input"
            ref={artistInputRef}
          ></input>
        </div>
        <div className="header__input">
          <span>Música</span>
          <input type="text" className="song__input" ref={songInputRef}></input>
        </div>

        <div className="header__input">
          <span>&nbsp;</span>
          <button className="btn btn-primary" onClick={handleSearchLyrics}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

const mapDispatchToProps = {
  search,
}

export default connect(null, mapDispatchToProps)(Header)
