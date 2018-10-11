import React, { Component } from "react";
import { connect } from "react-redux";
import Preview from "./Preview";
import CreateNoteButton from "./CreateNoteButton";
import { getNotesByTag, isTrash } from "../helpers";

class PreviewList extends Component {
  render() {
    const { notes, tag } = this.props;
    return (
      <div className="preview-list">
        <div>{!isTrash(tag) && <CreateNoteButton />}</div>
        <ul>
          {getNotesByTag(notes, tag).map((note, i) => {
            return <Preview note={note} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes, tag }) => {
  return { notes, tag };
};

export default connect(mapStateToProps)(PreviewList);
