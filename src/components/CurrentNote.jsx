import React, { Component } from "react";
import TagBar from "./TagBar";
import TextEditor from "./TextEditor";
import Buttons from "./Buttons";

class CurrentNote extends Component {
  render() {
    return (
      <div>
        <strong>Current Note</strong>
        <TagBar />
        <Buttons />
        <TextEditor />
      </div>
    );
  }
}

export default CurrentNote;
