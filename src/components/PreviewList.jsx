import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Preview from "./Preview";
import CreateNoteButton from "./CreateNoteButton";
import Search from "./Search";
import { selectNote } from '../actions';

class PreviewList extends Component {
  componentDidUpdate(prevProps) {
    const { selectNote, tag } = this.props;
    const taggedNotes = this.getTaggedNotes();
    if (taggedNotes.length && tag !== prevProps.tag) {
      const { id } = taggedNotes[0];
      selectNote(id);
    }
  }

  getTaggedNotes() {
    const { notes, tag } = this.props;
    return Object.values(notes).reverse().filter(note => {
      return !tag || note.tags[tag];
    });
  }

  render() {
    return (
      <div>
        Preview List
        <div>
          <Search /> <CreateNoteButton />
        </div>
        <ul>
          {this.getTaggedNotes().map((note, i) => {
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
