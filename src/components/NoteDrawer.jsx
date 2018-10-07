import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";
import { getAllTags } from "../helpers";

class NoteDrawer extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        NoteDrawer!!
        <ul>
          <Category tag={null}>All</Category>
          {getAllTags(notes).map((tag, i) => (
            <Category tag={tag} key={i}>{tag}</Category>
          ))}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(NoteDrawer);
