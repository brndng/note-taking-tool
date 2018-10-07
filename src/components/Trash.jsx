import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Preview from './Preview';
import { selectNote } from '../actions';
import { getInactiveNotes } from "../helpers";

class Trash extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        Trash!
        <ul>
          {getInactiveNotes(notes).map((note, i) => {
            return <Preview note={note} key={i} />;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ selectNote }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Trash);
