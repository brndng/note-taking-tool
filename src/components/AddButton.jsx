import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNote } from "../actions";

class AddButton extends Component {
  render() {
    const { createNote } = this.props;
    return <button onClick={createNote}>Add button</button>;
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createNote }, dispatch);
};

export default connect(
  null,
  matchDispatchToProps
)(AddButton);

// export default AddButton;
