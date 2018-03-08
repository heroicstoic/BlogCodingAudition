import React from "react"
import { render } from "react-dom"

import BlogList from "./containers/BlogList"

export default class Blog extends React.Component {
	render() {
		return (
			<div className="post-preview">
				<h2 className="post-title">
					{ this.props.title }
				</h2>
				<p className="post-subtitle">
					{ this.props.content }
				</p>
				<p className="post-meta">Posted by { this.props.username } on { this.props.plaindate }
				</p>
			</div>
		)
	}
}