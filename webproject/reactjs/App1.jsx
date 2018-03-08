import React from "react"
import { render } from "react-dom"

import BlogList from "./containers/BlogList"

var api_loc = 'http://127.0.0.1:8000/api.json'

class App1 extends React.Component {
  constructor() {
    super();
    this.state={
      blogs:[],         //for storing the content of the blogs
      restloc: api_loc, //for storing the location we query for data
      filter: ''        //what author are we filtering for?
    };
    this.changeFilter = this.changeFilter.bind(this);
    this.getRest = this.getRest.bind(this);
  }

  getRest(){
    if(this.state.filter == ''){
      fetch(this.state.restloc)
        .then(result=>result.json())
        .then(blogs=>this.setState({blogs}))
        .then(()=>setTimeout(this.getRest, 1000));
    }
    else{
      fetch(this.state.restloc + '?op=' + this.state.filter)
        .then(result=>result.json())
        .then(blogs=>this.setState({blogs}))
        .then(()=>setTimeout(this.getRest, 1000));
    }

  }

  changeFilter(event) {
    this.setState({filter: event.target.value});
  }

  componentDidMount(){
    this.getRest()
  }

  render() {
    return (
      <div>
        <input className="form-control" type="text" value={this.state.filter} onChange={this.changeFilter} placeholder="Filter by Original Poster" />
        <BlogList blogs={this.state.blogs} />
      </div>
    )
  }
}

render(<App1/>, document.getElementById('App1'))