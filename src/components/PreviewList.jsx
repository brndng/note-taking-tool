import React, { Component } from "react";
import { connect } from "react-redux";
import Preview from "./Preview";
import CreateNoteButton from "./CreateNoteButton";
import { getNotesByTag, isTrash } from "../helpers";

class PreviewList extends Component {
  render() {
    const { notes, currentTag } = this.props;
    return (
      <div className="preview-list">
        <div>{!isTrash(currentTag) && <CreateNoteButton />}</div>
        <ul>
          {getNotesByTag(notes, currentTag).map((note, i) => {
            return <Preview note={note} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes, currentTag }) => {
  return { notes, currentTag };
};

export default connect(mapStateToProps)(PreviewList);
