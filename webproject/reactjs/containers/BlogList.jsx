import React from "react"

import BlogDesc from "../components/BlogDesc"

export default class BlogList extends React.Component {
	render() {
		return (
			<div className="row">
				<div className="col-lg-8 col-md-10 mx-auto">
					{this.props.blogs.map(function(blog){
						return <BlogDesc title={blog.title} description={blog.description} username={blog.username} plaindate={blog.plaindate} key={blog.id} />
					})}
				</div>
			</div>
		)
	}
}