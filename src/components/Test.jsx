import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNote, createTag } from "../actions";

class Test extends Component {
  componentDidMount() {
    const { createNote, createTag } = this.props;
    createNote({ tags: [], text: "hey", id: 1 });
    createNote({ tags: [], text: "sup", id: 2 });
    createNote({ tags: [], text: "bye", id: 3 });
    createTag("tag1");
    createTag("tag2");
    createTag("tag3");
  }

  render() {
    return <div>Hello from Test</div>;
  }
}

const mapStateToProps = ({ note, notes, tag, tags }) => {
  return { note, notes, tag, tags };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ createNote, createTag }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Test);
