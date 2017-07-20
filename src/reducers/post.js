let posts=[
	{
		postId:"1",
		likes:"1",
		title:"git"
	},
	{
		postId:"2",
		likes:"2",
		title:"redux"
	}]
export default function postReducer(state = posts, action) {
  // console.log(action)
  switch (action.type) {
    case 'INCRMENT_LIKE':
      console.log('state', state)
      return state + 1;
    default:
      return state;
  }
}