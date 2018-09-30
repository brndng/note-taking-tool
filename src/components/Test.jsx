import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNote, addTag } from "../actions";

class Test extends Component {
  componentDidMount() {
    const { createNote, addTag } = this.props;
    createNote({ tags: [], text: "hey" });
    createNote({ tags: [], text: "sup" });
    createNote({ tags: [], text: "bye" });
  }

  render() {
    return <div>Hello from Test</div>;
  }
}

const mapStateToProps = ({ note, notes, tag, tags }) => {
  return { note, notes, tag, tags };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createNote, addTag }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Test);
