import React, { Component } from 'react'
import store from './store'
import {connect} from "react-redux"

class CommentBox extends Component {
  state = {
    comments: store.getState()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newComment = this.commentInput.value
    console.log(store.getState())
    store.dispatch({type: 'ADD_COMMENT', comment: newComment,postId:this.props.postId})
    this.setState({
      comments: store.getState()
    })
    this.commentForm.reset()
  }

  render() {
    console.log(this.props.comments)
    console.log(this.props.postId)
    let { postId, comments } = this.props
    let myComments = comments.filter(value => value.postId ===  postId ).map(item => {
       return item.content;})
    console.log('myComments', myComments)
    return (
      <div className="comment-box">
        {
             myComments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form ref={value => this.commentForm = value}
          onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" className="input" ref={value => this.commentInput = value} />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
   comments: state.comments
  })

export default connect(mapStateToProps)(CommentBox)