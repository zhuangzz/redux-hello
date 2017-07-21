// 文章主体
import React, { Component } from 'react';
import store from './store';
import {connect} from "react-redux";
import {Link} from "react-router-dom"
class PostBody extends Component {
  handleClick=()=>{
		store.dispatch({type:"INCRMENT_LIKE",postId:this.props.postId})
  }
  render() {
    console.log(this.props)
    console.log("xxx",store.getState())
    let {posts,postId,comments } = this.props
    let currentPost = posts.filter(value => value.postId === postId )[0]
    let currentComment=comments.filter(value=>value.postId===postId)
    console.log(currentPost)
    return (
      <div className="post-body">
        <div className="comment-num num ">
          
          {currentComment.length}评论
        </div>
      	<Link to={`/post/${postId}`} className="title">
        	 {currentPost.title}
     	  </Link>
      	<div className="likes-num num" onClick={this.handleClick}>
					{currentPost.likes} 赞
      	</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	comments:state.comments,
	posts:state.posts
});

export default connect(mapStateToProps)(PostBody);

