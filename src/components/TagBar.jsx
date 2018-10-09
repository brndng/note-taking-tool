import React, { Component } from "react";
import { connect } from "react-redux";
import TagEntry from "./TagEntry";
import TagDisplay from "./TagDisplay";
import { isTrash } from "../helpers";

class TagBar extends Component {
  render() {
    const { tag } = this.props;
    return isTrash(tag) ? (
      <div />
    ) : (
      <div>
        <TagDisplay />
        <TagEntry />
      </div>
    );
  }
}

const mapStateToProps = ({ tag }) => {
  return { tag };
};

export default connect(mapStateToProps)(TagBar);
