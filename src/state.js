const initialState = {
  data: {
    artist: '',
    song: '',
  },
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        data: { artist: action.payload.artist, song: action.payload.song },
      }
    default:
      return state
  }
}
