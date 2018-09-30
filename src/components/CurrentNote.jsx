import React, { Component } from "react";
import TagBar from "./TagBar";
import TextEditor from "./TextEditor";

class CurrentNote extends Component {
  render() {
    return (
      <div>
        Hello from CurrentNote!!
        <TagBar />
        <TextEditor />
      </div>
    );
  }
}

export default CurrentNote;
