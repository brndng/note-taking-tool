import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createNote, createTag } from "../actions";

class Test extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { createNote, createTag } = this.props;
    createNote({ tags: [], text: "helllooo", id: 1 });
    createTag("testtag");
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
