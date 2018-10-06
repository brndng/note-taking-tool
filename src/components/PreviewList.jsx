import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Preview from "./Preview";
import AddButton from "./AddButton";
import Search from "./Search";
import { selectNote } from '../actions';

class PreviewList extends Component {
  componentDidUpdate(prevProps) {
    const { selectNote, tag } = this.props;
    const taggedNotes = this.getTaggedNotes();
    if (taggedNotes.length && tag !== prevProps.tag) {
      const [id,] = taggedNotes[0];
      selectNote(id);
    }
  }

  getTaggedNotes() {
    const { notes, tag } = this.props;
    return Object.entries(notes).reverse().filter(entry => {
      const [, note] = entry;
      return !!note.tags[tag];
    });
  }

  render() {
    const { notes, tag } = this.props;
    return (
      <div>
        Preview List
        <div>
          <Search /> <AddButton />
        </div>
        <ul>
          {this.getTaggedNotes().map(entry => {
            const [id, note] = entry;
            return <Preview note={note} id={id} key={id} />;
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
