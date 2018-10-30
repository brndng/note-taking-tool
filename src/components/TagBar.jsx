import React, { Component } from "react";
import { connect } from "react-redux";
import TagEntry from "./TagEntry";
import TagDisplay from "./TagDisplay";
import { isTrash } from "../helpers";

class TagBar extends Component {
  render() {
    const { currentTag } = this.props;
    return (
      <div>
        {!isTrash(currentTag) && [<TagDisplay key={1} />, <TagEntry key={2} />]}
      </div>
    );
  }
}

const mapStateToProps = ({ currentTag }) => {
  return { currentTag };
};

export default connect(mapStateToProps)(TagBar);
