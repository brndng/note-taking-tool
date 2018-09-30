import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";

class TextEditor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { noteId, notes, editNote } = this.props;

    const text = notes[noteId] ? notes[noteId].text : ""; //TODO: find a better way

    return (
      <div>
        <textarea
          value={text}
          onChange={e => editNote(noteId, e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ noteId, notes }) => {
  return { noteId, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ editNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TextEditor);
