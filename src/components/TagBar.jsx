import React, { Component } from "react";
import { connect } from "react-redux";
import TagEntry from "./TagEntry";
import TagDisplay from "./TagDisplay";
import { isTrash } from "../helpers";

class TagBar extends Component {
  render() {
    const { tag } = this.props;
    return <div>{!isTrash(tag) && [<TagDisplay />, <TagEntry />]}</div>;
  }
}

const mapStateToProps = ({ tag }) => {
  return { tag };
};

export default connect(mapStateToProps)(TagBar);
