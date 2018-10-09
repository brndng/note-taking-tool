import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";
import { getNoteText, getNotesByTag, isTrash } from "../helpers";

class TextEditor extends Component {
  renderTextArea() {
    const { id, notes, tag, editNote } = this.props;
    const numberOfNotes = getNotesByTag(notes, tag).length;
    return numberOfNotes > 0 ? (
      <textarea
        value={getNoteText(notes, id)}
        placeholder="..."
        onChange={e => editNote(id, e.target.value)}
        disabled={isTrash(tag)}
      />
    ) : (
      "No notes!"
    );
  }
  render() {
    return (
      <div>
        <strong>Text Editor</strong>
        {this.renderTextArea()}
      </div>
    );
  }
}

const mapStateToProps = ({ id, notes, tag }) => {
  return { id, notes, tag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ editNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TextEditor);
