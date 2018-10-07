import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";

class TextEditor extends Component {
  renderTextArea() {
    const { id, notes, tag, editNote } = this.props;
    const text = (notes[id] && !notes[id].tags.trash) && notes[id].text;
    const onChange = (e) => editNote(id, e.target.value);
    const disabled = tag === 'trash';

    return <textarea
      value={text}
      onChange={onChange}
      disabled={disabled}
    />
  }
  render() {
    return (
      <div>
        <strong>Text Editor</strong>
        {this.renderTextArea()}
      </div>
    );
  }
}

const mapStateToProps = ({ id, notes, tag }) => {
  return { id, notes, tag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ editNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TextEditor);
