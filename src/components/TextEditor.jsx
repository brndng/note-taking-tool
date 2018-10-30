import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";
import { getNoteText, getNotesByTag, isTrash } from "../helpers";

class TextEditor extends Component {
  renderTextArea() {
    const { id, notes, currentTag, editNote } = this.props;
    const numberOfNotes = getNotesByTag(notes, currentTag).length;
    return numberOfNotes > 0 ? (
      <textarea
        value={getNoteText(notes, id)}
        placeholder="..."
        onChange={e => editNote(id, e.target.value)}
        disabled={isTrash(currentTag)}
      />
    ) : (
      "No notes!"
    );
  }
  render() {
    return <div className="text-area-container">{this.renderTextArea()}</div>;
  }
}

const mapStateToProps = ({ id, notes, currentTag }) => {
  return { id, notes, currentTag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ editNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TextEditor);
