import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setNoteId } from "../actions";

class Preview extends Component {
  render() {
    const { note, setNoteId } = this.props;
    return <li onClick={() => setNoteId(note.id)}>{note.text}</li>;
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ setNoteId }, dispatch);
};

export default connect(
  null,
  matchDispatchToProps
)(Preview);
