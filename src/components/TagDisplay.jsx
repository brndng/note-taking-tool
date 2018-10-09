import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteTag } from "../actions";
import { getTagsById } from "../helpers";

class TagDisplay extends Component {
  render() {
    const { id, notes, deleteTag } = this.props;
    return (
      <div>
        {getTagsById(notes, id).map((tag, i) => {
          return (
            <span onClick={() => deleteTag(id, tag)} key={i}>
              {tag}
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ id, notes }) => {
  return { id, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ deleteTag }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TagDisplay);
