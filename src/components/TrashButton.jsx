import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { markForTrash, selectNote } from "../actions";

class TrashButton extends Component {
  handleClick() {
    const { id, markForTrash, selectNote } = this.props;
    markForTrash(id);
  }

  render() {
    return <button onClick={() => this.handleClick()}>Move to trash</button>;
  }
}

const mapStateToProps = ({ id, tag, notes }) => {
  return { id, tag, notes };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ markForTrash, selectNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TrashButton);
