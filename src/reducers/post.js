let posts=[
	{
		postId:"1",
		likes:1,
		title:"git"
	},
	{
		postId:"2",
		likes:2,
		title:"redux"
	}]
export default function postReducer(state = posts, action) {
  // console.log(action)
  switch (action.type) {
    case 'INCRMENT_LIKE':
      // let otherPosts = state.filter(value => value.postId !== action.postId)
      // let currentPost = state.filter(value => value.postId === action.postId)[0]
      // return [...otherPosts, { ...currentPost, likes: currentPost.likes+1 }]
      let stateCopy=state.slice()
      stateCopy.map(item=>{
      	if(item.postId===action.postId){
      		item.likes++
      		return item
      	}
      	return item
      })
      return stateCopy
    default:
      return state;
  }
}