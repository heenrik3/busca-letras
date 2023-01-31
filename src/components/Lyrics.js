import Artist from './Artist'
import SongInfo from './SongInfo'
import Spinner from './Spinner'

function Lyrics(props) {
  const { data } = props

  if (props.isLoading) {
    return (
      <div className="lyrics">
        <Spinner />
      </div>
    )
  }

  return (
    <div className="lyrics">
      <Artist cover={data.cover} error={props.error} />
      <SongInfo data={data} error={props.error} />
    </div>
  )
}

export default Lyrics
