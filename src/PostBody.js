// 文章主体
import React, { Component } from 'react';
import store from './store';
import {connect} from "react-redux"
class PostBody extends Component {
  handleClick=()=>{
		store.dispatch({type:"INCRMENT_LIKE",postId:this.props.postId})
  }
  render() {
    console.log(this.props)
    let {posts,postId } = this.props
    let currentPost = posts.filter(value => value.postId === postId )[0]
    console.log(currentPost)
    return (
      <div className="post-body">
        <div className="comment-num num ">
          {this.props.comments.length}评论
        </div>
      	<div className="title">
        	 {currentPost.title}
     	</div>
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

