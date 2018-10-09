import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNote, selectTag, trashNote } from "../actions";
import { getNextId, isOnlyActiveNoteByTag } from "../helpers";

class TrashButton extends Component {
  sendNoteToTrash() {
    const { id, notes, tag, selectNote, selectTag, trashNote } = this.props;
    trashNote(id);
    selectNote(getNextId(id, notes, tag));
    if (isOnlyActiveNoteByTag(notes, id, tag)) selectTag(null);
  }
  render() {
    return (
      <button onClick={() => this.sendNoteToTrash()}>Move to Trash</button>
    );
  }
}

const mapStateToProps = ({ id, tag, notes }) => {
  return { id, tag, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote, selectTag, trashNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TrashButton);
