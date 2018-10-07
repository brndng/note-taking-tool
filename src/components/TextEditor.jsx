import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";

class TextEditor extends Component {
  //display current note logic here
  render() {
    const { id, notes, editNote } = this.props;
    const text = notes[id] ? notes[id].text : "";
    return (
      <div>
        <textarea
          value={text}
          onChange={e => editNote(id, e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ id, notes }) => {
  return { id, notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ editNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TextEditor);
