import React, { Component } from "react";
import { connect } from "react-redux";

class TagDisplay extends Component {
  render() {
    const { id, notes } = this.props;
    const tags = notes[id] ? Object.values(notes[id].tags) : [];
    return (
      <div>
        TagDisplay
        <ul>
          {tags.map((tag, i) => {
            return (<li key={i}>{tag}</li>)
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ id, notes }) => {
  return { id, notes };
};

export default connect(
  mapStateToProps,
)(TagDisplay);