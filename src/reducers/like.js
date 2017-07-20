
export default function commentReducer(state = 0, action) {
  // console.log(action)
  switch (action.type) {
    case 'INCRMENT_LIKE':
      return state + 1;
    default:
      return state;
  }
}