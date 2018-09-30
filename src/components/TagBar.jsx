import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createTag } from "../actions";

class TagBar extends Component {
  render() {
    return (
      <div>
        TagBar
        <input type="form" />
      </div>
    );
  }
}

// const mapStateToProps = ({ note, notes, tag, tags }) => {
//   return { note, notes, tag, tags };
// };

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createTag }, dispatch);
};

export default connect(
  null,
  matchDispatchToProps
)(TagBar);

// export default TagBar;
