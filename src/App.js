import React, { Component } from 'react';
import './App.css';
import CommentBox from "./CommentBox";
import PostBody from "./PostBody";
import store from "./store";
import {Provider} from "react-redux"

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
 					<div>
   					<div className="top  clearfix">
     					<PostBody />
   				 	</div>
   					 <div className="bottom clearfix">
    				  <CommentBox />
   					</div>
 					</div>
				</Provider>
      </div>
    )
  }
}

export default App;
