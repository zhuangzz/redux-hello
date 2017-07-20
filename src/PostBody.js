// 文章主体
import React, { Component } from 'react';
import store from './store';
import {connect} from "react-redux"
class PostBody extends Component {
  handleClick(){
		store.dispatch({type:"INCRMENT_LIKE"})
  }
  render() {
    return (
      <div className="post-body" style={{height:"80px",backgroundColor:"lightpink"}}>
       {this.props.comments.length}
       <div className="likes-num num" onClick={this.handleClick}>
				{this.props.likes}赞
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

