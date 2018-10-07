import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Preview from "./Preview";
import CreateNoteButton from "./CreateNoteButton";
import Search from "./Search";
import { selectNote } from '../actions';
import { getTaggedNotes } from "../helpers"

class PreviewList extends Component {
  render() {
    const { notes, tag } = this.props;
    return (
      <div>
        Preview List
        <div>
          <Search /> <CreateNoteButton />
        </div>
        <ul>
          {getTaggedNotes(notes, tag).map((note, i) => {
            return <Preview note={note} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes, tag }) => {
  return { notes, tag };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(PreviewList);
