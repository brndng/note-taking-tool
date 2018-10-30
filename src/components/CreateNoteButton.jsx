import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNote } from "../actions";

class CreateNoteButton extends Component {
  render() {
    const { currentTag, createNote } = this.props;
    return <button onClick={() => createNote(currentTag)}>Create New</button>;
  }
}

const mapStateToProps = ({ currentTag }) => {
  return { currentTag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(CreateNoteButton);
