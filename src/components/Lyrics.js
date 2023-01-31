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
      <Artist cover={data.cover} error={!data} />
      <SongInfo data={data} error={!data} />
    </div>
  )
}

export default Lyrics
