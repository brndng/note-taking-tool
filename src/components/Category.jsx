import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTag, selectNote } from "../actions";
import { getMostRecentId } from "../helpers";

class Category extends Component {
  loadCategory() {
    const { notes, tag, selectTag, selectNote } = this.props;
    const id = getMostRecentId(notes, tag);
    selectTag(tag);
    selectNote(id);
  }

  render() {
    return <div onClick={() => this.loadCategory()}>{this.props.children}</div>;
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectTag, selectNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
