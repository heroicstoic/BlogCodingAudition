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

    //bind this for our functions
    this.changeFilter = this.changeFilter.bind(this);
    this.getRest = this.getRest.bind(this);
  }

  getRest(){                                        //get the data for our app, recursively called every 5 seconds
    if(this.state.filter == ''){                    // if no filter set, just lookup the whole list
      fetch(this.state.restloc)
        .then(result=>result.json())
        .then(blogs=>this.setState({blogs}))
        .then(()=>setTimeout(this.getRest, 5000)); 
    }
    else{                                           // if we want to filter, simply examine filtered data
      fetch(this.state.restloc + '?op=' + this.state.filter)
        .then(result=>result.json())
        .then(blogs=>this.setState({blogs}))
        .then(()=>setTimeout(this.getRest, 5000));
    }

  }

  changeFilter(event) { // update the username that we filter by
    this.setState({filter: event.target.value});
  }

  componentDidMount(){ //start our pseudo-hot refresh loop
    this.getRest()
  }

  render() {
    return (
      <div>
        <input className="form-control" type="text" value={this.state.filter} onChange={this.changeFilter} placeholder="Filter by Original Poster" />
        <br/>
        <BlogList blogs={this.state.blogs} />
      </div>
    )
  }
}

render(<App1/>, document.getElementById('App1'))