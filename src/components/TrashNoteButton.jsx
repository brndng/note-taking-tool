import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Emoji from "./Emoji";
import { setNoteId, setTag, trashNote } from "../actions";
import { getNextId, isOnlyNoteByTag, isDisabled } from "../helpers";

class TrashNoteButton extends Component {
  sendNoteToTrash() {
    const { id, notes, tag, setNoteId, setTag, trashNote } = this.props;
    trashNote(id);
    setNoteId(getNextId(id, notes, tag));
    if (isOnlyNoteByTag(notes, id, tag)) setTag(null);
  }
  render() {
    const { notes, tag } = this.props;
    return (
      <button
        onClick={() => this.sendNoteToTrash()}
        disabled={isDisabled(notes, tag)}
      >
        🗑
      </button>
    );
  }
}

const mapStateToProps = ({ id, tag, notes }) => {
  return { id, tag, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ setNoteId, setTag, trashNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TrashNoteButton);
