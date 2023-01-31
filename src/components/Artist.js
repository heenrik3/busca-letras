function Artist(props) {
  if (props.error) {
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
        src={props.cover || 'artist.jpg'}
        alt="artist pic"
      ></img>
    </picture>
  )
}

export default Artist
