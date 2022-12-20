export function search(item) {
  return {
    type: 'SEARCH',
    payload: item,
  }
}
