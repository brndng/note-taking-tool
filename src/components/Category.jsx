import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setTag, setNoteId } from "../actions";
import { getMostRecentId } from "../helpers";

class Category extends Component {
  loadCategory() {
    const { notes, tag, setTag, setNoteId } = this.props;
    const id = getMostRecentId(notes, tag);
    setTag(tag);
    setNoteId(id);
  }

  render() {
    return <div onClick={() => this.loadCategory()}>{this.props.children}</div>;
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ setTag, setNoteId }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
