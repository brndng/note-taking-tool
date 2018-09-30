import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTag } from "../actions";

class Category extends Component {
  render() {
    const { tag, selectTag } = this.props;
    return <div onClick={() => selectTag(tag)}>{tag}</div>;
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectTag }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
