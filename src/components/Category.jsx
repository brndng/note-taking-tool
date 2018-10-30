import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectTag, selectNote } from "../actions";
import { getMostRecentNoteByTag } from "../helpers";

class Category extends Component {
  selectCategory() {
    const { notes, tag, selectTag, selectNote } = this.props;
    const mostRecentNote = getMostRecentNoteByTag(notes, tag);
    selectNote(mostRecentNote ? mostRecentNote.id : null);
    selectTag(tag);
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

const mapStateToProps = ({ notes, currentTag }) => {
  return { notes, currentTag };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectTag, selectNote }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Category);
