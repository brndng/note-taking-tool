import React, { Component } from "react";

class Preview extends Component {
  render() {
    return <li>{this.props.note.text}</li>;
  }
}

export default Preview;
