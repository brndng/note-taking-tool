import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { deleteNote, selectNote } from "../actions";
import { isDisabled, getNextId } from "../helpers";

class DeleteNoteButton extends Component {
  deleteNoteFromTrash() {
    const { id, notes, currentTag, deleteNote, selectNote } = this.props;
    deleteNote(id);
    selectNote(getNextId(id, notes, currentTag));
  }
  render() {
    const { notes, currentTag } = this.props;
    return (
      <button
        onClick={() => this.deleteNoteFromTrash()}
        disabled={isDisabled(notes, currentTag)}
      >
        Delete
      </button>
    );
  }
}

const mapStateToProps = ({ id, notes, currentTag }) => {
  return { id, notes, currentTag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ deleteNote, selectNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(DeleteNoteButton);
