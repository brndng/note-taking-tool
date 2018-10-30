import React, { Component } from "react";
import { connect } from "react-redux";
import TrashNoteButton from "./TrashNoteButton";
import RestoreNoteButton from "./RestoreNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";
import { isTrash } from "../helpers";

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        {isTrash(this.props.currentTag) ? (
          [<RestoreNoteButton />, <DeleteNoteButton />]
        ) : (
          <TrashNoteButton />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ currentTag }) => {
  return { currentTag };
};

export default connect(mapStateToProps)(Buttons);
