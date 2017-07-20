let  comments = [
  {content:"一",
 		postId:"1"},
 	{content:"一一",
 		postId:"1"},
 	{content:"二",
 		postId:"2"},
  ]

export default function commentReducer(state = comments, action) {
  // console.log(action)
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state ,{content:action.comment,postId:action.postId}]
    default:
      return state;
  }
}