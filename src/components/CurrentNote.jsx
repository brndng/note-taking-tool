import React, { Component } from "react";
import TagEntry from "./TagEntry";
import TextEditor from "./TextEditor";
import TagDisplay from "./TagDisplay";

class CurrentNote extends Component {
  render() {
    return (
      <div>
        Hello from CurrentNote!!
        <TagEntry />
        <TagDisplay />
        <TextEditor />
      </div>
    );
  }
}

export default CurrentNote;
