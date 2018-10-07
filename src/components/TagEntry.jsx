import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTag } from "../actions";

class TagEntry extends Component {
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
    const { addTag, id } = this.props;
    addTag(id, this.state.value);
    this.setState({ value: "" })
  }

  render() {
    //TODO: change to onSubmit with e.preventDefault()
    return (
      <div>
        TagEntry
        <input
          type="text"
          value={this.state.value}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={() => this.handleClick()}>Enter</button>
      </div>
    );
  }
}

const mapStateToProps = ({ id }) => {
  return { id };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ addTag }, dispatch);
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(TagEntry);
