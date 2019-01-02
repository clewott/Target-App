import React, { Component } from "react";

class Highlights extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    console.log(this.props);
    let highlights = this.props.highlights;
    
    return (
      <div className="highlightsContainer">
        <h2 className="highlightsTitle">product highlights</h2>
        <ul className="highlightsList">
          {highlights.map(function (highlight) {
              let index = highlights.indexOf(highlight);
              let highlightText = highlight.replace(/<\/?strong>/g, "");
              return <li key={index}>{highlightText}</li>
            }, this)}
        </ul>
      </div>
    );
  }
}

export default Highlights;