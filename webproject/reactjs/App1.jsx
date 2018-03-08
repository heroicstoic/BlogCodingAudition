import React from "react"
import { render } from "react-dom"

import BlogList from "./containers/BlogList"

class App1 extends React.Component {
  constructor() {
    super();
    this.state={blogs:[]};
  }

  componentDidMount(){
    
  }

  get_blogs(){
    fetch('http://127.0.0.1:8000/api.json')
      .then(result=>result.json())
      .then(blogs=>this.setState({blogs}))
  }

  render() {
    return (
      <div>
        <BlogList blogs={this.state.blogs} />
      </div>
    )
  }
}

render(<App1/>, document.getElementById('App1'))