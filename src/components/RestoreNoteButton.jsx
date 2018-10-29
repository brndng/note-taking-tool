import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setNoteId, restoreNote } from "../actions";
import { getNextId, isDisabled } from "../helpers";

class RestoreNoteButton extends Component {
  restoreNoteFromTrash() {
    const { id, notes, tag, setNoteId, restoreNote } = this.props;
    restoreNote(id);
    setNoteId(getNextId(id, notes, tag));
  }
  render() {
    const { notes, tag } = this.props;
    return (
      <button
        onClick={() => this.restoreNoteFromTrash()}
        disabled={isDisabled(notes, tag)}
      >
        Restore
      </button>
    );
  }
}

const mapStateToProps = ({ id, tag, notes }) => {
  return { id, tag, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ setNoteId, restoreNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(RestoreNoteButton);
