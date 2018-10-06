import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";

class NoteDrawer extends Component {
  render() {
    const { tags } = this.props;
    return (
      <div>
        NoteDrawer!!
        <ul>
          <Category tag={null}>'All'</Category>
          {Object.values(tags).map((tag, i) => (
            <Category tag={tag} key={i}>{tag}</Category>
          ))}
        </ul>
      </div >
    );
  }
}

const mapStateToProps = ({ tags }) => {
  return { tags };
};

export default connect(mapStateToProps)(NoteDrawer);

// export default NoteDrawer;
