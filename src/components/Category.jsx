import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTag, selectNote } from "../actions";
import { getTaggedNotes } from "../helpers";

class Category extends Component {
  updateIdentifiers() {
    const { notes, tag, selectTag, selectNote } = this.props;
    const { id } = getTaggedNotes(notes, tag)[0];
    selectTag(tag);
    selectNote(id);
  }

  render() {
    return <div onClick={() => this.updateIdentifiers()}>{this.props.children}</div>;
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectTag, selectNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
