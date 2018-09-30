import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editNote } from "../actions";

class TextEditor extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // initial note should be store.note (curr)
  }
  render() {
    const { editNote } = this.props;

    return (
      <div>
        Hello from TextEditor!!{" "}
        {/* <textarea value={note.text} onChange={e => editNote(e.target.value)} /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ noteId }) => {
  return { noteId };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ editNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TextEditor);

// export default TextEditor;
