import React, { Component } from "react";
import { connect } from "react-redux";
import TrashNoteButton from "./TrashNoteButton";
import RestoreNoteButton from "./RestoreNoteButton";
import DeleteNoteButton from "./DeleteNoteButton";
import { isTrash } from "../helpers";

class Buttons extends Component {
  render() {
    const { tag } = this.props;
    return isTrash(tag) ? (
      <div>
        <RestoreNoteButton />
        <DeleteNoteButton />
      </div>
    ) : (
      <div>
        <TrashNoteButton />
      </div>
    );
  }
}

const mapStateToProps = ({ tag }) => {
  return { tag };
};

export default connect(mapStateToProps)(Buttons);
