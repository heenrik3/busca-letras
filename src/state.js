const initialState = {
  data: {
    artist: '',
    song: '',
    cover: '',
  },
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        data: {
          artist: action.payload.artist,
          song: action.payload.song,
          cover: action.payload.cover,
        },
      }
    default:
      return state
  }
}
