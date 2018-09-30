import React, { Component } from "react";

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.tag}</div>;
  }
}

export default Category;
