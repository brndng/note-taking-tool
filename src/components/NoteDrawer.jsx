import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";
import { getAllTags } from "../helpers";

class NoteDrawer extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        <strong>NoteDrawer</strong>
        <ul>
          <Category tag={null}>All</Category>
          {getAllTags(notes).map((tag, i) => (
            tag !== 'trash' && <Category tag={tag} key={i}>{tag}</Category>
          ))}
          <Category tag={'trash'}>Trash</Category>
        </ul>
      </div >
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(NoteDrawer);
