import React,{Component}from "react"
import {Link} from 'react-router-dom'

export default class HomePage extends Component{
	render(){
		return(
			<div>
				<ul>
					<li><Link to="/post/1">git</Link></li>
					<li><Link to="/post/2">redux</Link></li>
				</ul>
			</div>)
	}
}