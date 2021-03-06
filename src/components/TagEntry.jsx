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

  setText(e) {
    this.setState({ value: e.target.value });
  }

  submitTag(e) {
    const { addTag, id } = this.props;
    e.preventDefault();
    addTag(id, this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.submitTag(e)}>
          <input
            type="text"
            placeholder="enter tag..."
            value={this.state.value}
            onChange={e => this.setText(e)}
          />
        </form>
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
