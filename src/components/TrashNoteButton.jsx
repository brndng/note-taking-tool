import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNote, selectTag, trashNote } from "../actions";
import { getNextId, isOnlyNoteByTag, isDisabled } from "../helpers";

class TrashNoteButton extends Component {
  sendNoteToTrash() {
    const {
      id,
      notes,
      currentTag,
      selectNote,
      selectTag,
      trashNote
    } = this.props;
    trashNote(id);
    selectNote(getNextId(id, notes, currentTag));
    if (isOnlyNoteByTag(notes, id, currentTag)) selectTag(null);
  }
  render() {
    const { notes, currentTag } = this.props;
    return (
      <button
        onClick={() => this.sendNoteToTrash()}
        disabled={isDisabled(notes, currentTag)}
      >
        Trash
      </button>
    );
  }
}

const mapStateToProps = ({ id, currentTag, notes }) => {
  return { id, currentTag, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote, selectTag, trashNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TrashNoteButton);
