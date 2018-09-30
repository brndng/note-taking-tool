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
          {Object.values(tags).map((tag, i) => (
            <Category tag={tag} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ tags }) => {
  return { tags };
};

export default connect(mapStateToProps)(NoteDrawer);

// export default NoteDrawer;
