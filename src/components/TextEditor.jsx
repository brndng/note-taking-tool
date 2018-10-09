import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";
import { getNoteText, isTrash } from "../helpers";

class TextEditor extends Component {
  renderCurrentText() {
    const { id, notes, tag, editNote } = this.props;
    return (
      <textarea
        value={getNoteText(notes, id)}
        placeholder="..."
        onChange={e => editNote(id, e.target.value)}
        disabled={isTrash(tag)}
      />
    );
  }
  render() {
    return (
      <div>
        <strong>Text Editor</strong>
        {this.renderCurrentText()}
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
