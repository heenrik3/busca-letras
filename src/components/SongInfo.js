function SongInfo(props) {
  const { artist, title, lyrics } = props.data

  if (props.error) {
    return (
      <div className="lyrics__info">
        <h1>Letra não encontrada 😮‍💨</h1>
      </div>
    )
  }

  if (!title) {
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

export default SongInfo

// function mapStateToProps(state) {
//   return {
//     artist: state.data.artist,
//     song: state.data.song,
//     cover: state.data.cover,
//   }
// }

// export default connect(mapStateToProps)(SongInfo)
