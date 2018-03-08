import React from "react"

import Blog from "../components/Blog"

export default class BlogList extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">
					{this.props.blogs.map(function(blog){
						return <Blog title={blog.title} content={blog.content} username={blog.username} plaindate={blog.plaindate} />
					})}
				</div>
			</div>
		)
	}
}