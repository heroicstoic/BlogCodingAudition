import React from "react"
import { render } from "react-dom"

// simple render component for a blog, no buttons for edit delete

export default class BlogDesc extends React.Component {
	render() {
		return (
			<a href={"/post/"+this.props.postID} >
			<div className="post-preview">
				<h2 className="post-title">
					{ this.props.title }
				</h2>
				<p className="post-subtitle">
					{ this.props.description }
				</p>
				<p className="post-meta">Posted by { this.props.username } on { this.props.plaindate }
				</p>
			</div>
			</a>
		)
	}
}