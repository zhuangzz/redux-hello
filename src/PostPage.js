import React, { Component } from 'react';

import CommentBox from "./CommentBox";
import PostBody from "./PostBody";


class PostPage extends Component {
  render() {
    return (
      <div>      
 				<div>
   				<div className="top  clearfix">
     				<PostBody />
   				</div>
   				<div className="bottom clearfix">
    				<CommentBox />
   				</div>
 				</div>
      </div>
    )
  }
}

export default PostPage;
