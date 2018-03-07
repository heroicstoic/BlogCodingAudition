import React from "react"

import Headline from "../components/Headline"

export default class App1Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>Using React Live</Headline>
          </div>
        </div>
      </div>
    )
  }
}