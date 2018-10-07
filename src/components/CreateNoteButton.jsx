import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNote } from "../actions";

class CreateNoteButton extends Component {
  render() {
    const { tag, createNote } = this.props;
    return <button onClick={() => createNote(tag)}>Create Note</button>;
  }
}

const mapStateToProps = ({ tag }) => {
  return { tag };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CreateNoteButton);
