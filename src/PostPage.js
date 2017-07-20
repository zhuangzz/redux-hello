import React, { Component } from 'react';

import CommentBox from "./CommentBox";
import PostBody from "./PostBody";


class PostPage extends Component {
  render(){
    let {id}=this.props.match.params
    
    return (
      <div>      
 				<div>
   				<div className="top  clearfix">
     				<PostBody postId={id}/>
   				</div>
   				<div className="bottom clearfix">
    				<CommentBox postId={id}/>
   				</div>
 				</div>
      </div>
    )
  }
}

export default PostPage;
