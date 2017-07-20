export default function commentReducer(state = 0, action) {
  console.log(action)
  switch (action.type) {
    case 'x':
      return state;
    default:
      return state;
  }
}