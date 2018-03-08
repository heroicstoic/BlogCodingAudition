import React from "react"
import { render } from "react-dom"

// simple render component for a blog, no buttons for edit delete

export default class BlogDesc extends React.Component {
	render() {
		return (
			
			<div className="post-preview">
				<a href={"/post/"+this.props.postID} >
				<h2 className="post-title">
					{ this.props.title }
				</h2>
				<p className="post-subtitle">
					{ this.props.description }
				</p>
				</a>
				<p className="post-meta">Posted by { this.props.username } on { this.props.plaindate }
				</p>
			</div>
		)
	}
}