import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteNote, setNoteId } from "../actions";
import { isDisabled, getNextId } from "../helpers";

class DeleteNoteButton extends Component {
  deleteNoteFromTrash() {
    const { id, notes, tag, deleteNote, setNoteId } = this.props;
    deleteNote(id);
    setNoteId(getNextId(id, notes, tag));
  }
  render() {
    const { notes, tag } = this.props;
    return (
      <button
        onClick={() => this.deleteNoteFromTrash()}
        disabled={isDisabled(notes, tag)}
      >
        Delete
      </button>
    );
  }
}

const mapStateToProps = ({ id, notes, tag }) => {
  return { id, notes, tag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ deleteNote, setNoteId }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DeleteNoteButton);
