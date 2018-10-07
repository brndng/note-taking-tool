import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTag, selectNote, toggleView } from "../actions";
import { getNotesByTag } from "../helpers";

class Category extends Component {
  updateIdentifiers() {
    const { notes, tag, selectTag, selectNote, toggleView } = this.props;
    const taggedNotes = getNotesByTag(notes, tag);
    const id = taggedNotes.length && taggedNotes[0].id; //
    const status = !(tag === 'trash');
    selectTag(tag);
    selectNote(id);
    toggleView(status);
  }

  render() {
    return <div onClick={() => this.updateIdentifiers()}>{this.props.children}</div>;
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectTag, selectNote, toggleView }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
