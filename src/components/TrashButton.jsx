import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNote, selectTag, trashNote } from "../actions";
import { getNextNote, isOnlyNoteByTag } from "../helpers";

class TrashButton extends Component {
  handleNoteToTrash() {
    const { id, notes, tag, selectNote, selectTag, trashNote } = this.props;
    const nextNote = getNextNote(id, notes, tag);
    const nextId = nextNote && nextNote.id;

    trashNote(id);
    selectNote(nextId);
    if (isOnlyNoteByTag(notes, id, tag)) {
      selectTag(null);
    }
  }
  render() {
    return <button onClick={() => this.handleNoteToTrash()}>Move to Trash</button>;
  }
}

const mapStateToProps = ({ id, tag, notes }) => {
  return { id, tag, notes };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote, selectTag, trashNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TrashButton);
