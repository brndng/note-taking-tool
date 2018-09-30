import React, { Component } from "react";
import SideBar from "../src/components/SideBar";
import PreviewList from "../src/components/PreviewList";
import CurrentNote from "../src/components/CurrentNote";
import Test from "../src/components/Test";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Test />
        <SideBar />
        <PreviewList />
        <CurrentNote />
      </div>
    );
  }
}

export default App;
