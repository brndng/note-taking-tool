import React, { Component } from "react";
import TagEntry from "./TagEntry";
import TextEditor from "./TextEditor";
import TagDisplay from "./TagDisplay";
import TrashButton from "./TrashButton";

class CurrentNote extends Component {
  render() {
    return (
      <div>
        <strong>Current Note</strong>
        <TagEntry />
        <TagDisplay />
        <TrashButton />
        <TextEditor />
      </div>
    );
  }
}

export default CurrentNote;
