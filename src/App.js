import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./scss/main.scss";

import SideBar from "../src/components/SideBar";
import PreviewList from "../src/components/PreviewList";
import CurrentNote from "../src/components/CurrentNote";
import { loadInitialState } from "../src/actions";

class App extends Component {
  componentDidMount() {
    const { loadInitialState } = this.props;
    loadInitialState();
  }

  render() {
    return (
      <div className="App">
        <SideBar />
        <PreviewList />
        <CurrentNote />
      </div>
    );
  }
}

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ loadInitialState }, dispatch);
};

export default connect(
  null,
  matchDispatchToProps
)(App);
