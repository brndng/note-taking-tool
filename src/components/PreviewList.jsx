import React, { Component } from "react";
import { connect } from "react-redux";
import Preview from "./Preview";
import AddButton from "./AddButton";
import Search from "./Search";

class PreviewList extends Component {
  render() {
    const { notes, tag } = this.props;
    return (
      <div>
        Hello from PreviewList!!
        <div>
          <Search /> <AddButton />
        </div>
        <ul>
          {Object.entries(notes).map(note => {
            return <Preview note={note[1]} id={note[0]} key={note[0]} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes, tag }) => {
  return { notes, tag };
};

export default connect(mapStateToProps)(PreviewList);
