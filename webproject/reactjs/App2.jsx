import React from "react"
import { render } from "react-dom"

var api_loc = '/api/'

// Not entirely xss safe, unless input was protected on django end.
// If time allowed, implement more XSS protection on client side
class App2 extends React.Component {
  constructor() {
    super();
    this.state={
      blog:{},         //for storing the content of the blogs
      restloc: api_loc, //for storing the location we query for data
      filter: ''        //what author are we filtering for?
    };

    //bind this for our functions
    this.changeFilter = this.changeFilter.bind(this);
    this.getRest = this.getRest.bind(this);
  }

  getRest(){                                        //get the data for our app, recursively called every 5 seconds
    fetch(this.state.restloc + BLOG_ID + '.json')
      .then(result=>result.json())
      .then(blog=>this.setState({blog}))
      .then(()=>setTimeout(this.getRest, 3000)); 
  }

  changeFilter(event) { // update the username that we filter by
    this.setState({filter: event.target.value});
  }

  componentDidMount(){ //start our pseudo-hot refresh loop
    this.getRest()
  }

  render() {
    const background = {
       backgroundImage: 'url(\'../static/img/frog2.jpg\')',
    }
    return (
      <div>
        <header className="masthead" style={ background }>
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>{ this.state.blog.title }</h1>
                  <h2>{ this.state.blog.description }</h2>
                  <p className="post-meta">Posted by { this.state.blog.username } on { this.state.blog.plaindate }
                  </p>
                </div>            
              </div>
            </div>
          </div>
        </header>

        <div className="container">
                  
          <p style={{ whiteSpace: "pre-line", boxSizing: "border-box"}}>
            { this.state.blog.content }
          </p>
        </div>
      </div>
    )
  }
}

render(<App2/>, document.getElementById('App2'))

