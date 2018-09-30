import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTag } from "../actions";

class TagBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleClick() {
    const { addTag, noteId } = this.props;
    addTag(noteId, this.state.value);
  }

  render() {
    //TODO: change to onSubmit with e.preventDefault()
    return (
      <div>
        TagBar
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.handleClick()} />
      </div>
    );
  }
}

const mapStateToProps = ({ noteId }) => {
  return { noteId };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ addTag }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TagBar);
