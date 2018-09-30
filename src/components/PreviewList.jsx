import React, { Component } from "react";
import { connect } from "react-redux";
import Preview from "./Preview";
import AddButton from "./AddButton";
import Search from "./Search";

class PreviewList extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        Hello from PreviewList!!
        <div>
          <Search /> <AddButton />
        </div>
        <ul>
          {notes.map((note, i) => (
            <Preview note={note} key={i} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(PreviewList);
