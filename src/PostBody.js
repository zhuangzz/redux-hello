// 文章主体
import React, { Component } from 'react';
import {connect} from "react-redux"
class PostBody extends Component {
  render() {
    return (
      <div className="post-body" style={{height:"80px",backgroundColor:"lightpink"}}>
       {this.props.comments.length}
       <div className="likes-num num">

       	 {this.props.likes} 赞
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
	comments:state.comments,
	likes:state.likes
});

export default connect(mapStateToProps)(PostBody);

