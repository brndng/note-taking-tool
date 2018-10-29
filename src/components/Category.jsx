import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setTag, setNoteId } from "../actions";
import { getMostRecentId } from "../helpers";

class Category extends Component {
  // loadCategory() {
  //   const { notes, tag, setTag, setNoteId } = this.props;
  //   const id = getMostRecentId(notes, tag);
  //   setTag(tag);
  //   setNoteId(id);
  // }

  selectCategory() {
    const { notes, tag, setTag, setNoteId } = this.props;
    const id = getMostRecentId(notes, tag); //bytag
    setNoteId(id);
    // const mostRecentNote = getMostRecentNoteByTag(notes, tag);
    // selectNote(mostRecentNote ? mostRecentNote.id : null);
    setTag(tag);
  }

  render() {
    const { tag, currentTag } = this.props;
    const classes = tag === currentTag ? "is-selected" : "";
    return (
      <li className={classes} onClick={() => this.selectCategory()}>
        {this.props.children}
      </li>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ setTag, setNoteId }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
