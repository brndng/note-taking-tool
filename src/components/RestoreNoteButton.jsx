import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNote, restoreNote } from "../actions";
import { getNextId, isDisabled } from "../helpers";

class RestoreNoteButton extends Component {
  restoreNoteFromTrash() {
    const { id, notes, currentTag, selectNote, restoreNote } = this.props;
    restoreNote(id);
    selectNote(getNextId(id, notes, currentTag));
  }
  render() {
    const { notes, currentTag } = this.props;
    return (
      <button
        onClick={() => this.restoreNoteFromTrash()}
        disabled={isDisabled(notes, currentTag)}
      >
        Restore
      </button>
    );
  }
}

const mapStateToProps = ({ id, currentTag, notes }) => {
  return { id, currentTag, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote, restoreNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(RestoreNoteButton);
