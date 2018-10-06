import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectNote } from "../actions";

class Preview extends Component {
  render() {
    const { note, selectNote } = this.props;
    return <li onClick={() => selectNote(note.id)}>{note.text}</li>;
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote }, dispatch);
};

export default connect(
  null,
  matchDispatchToProps
)(Preview);
