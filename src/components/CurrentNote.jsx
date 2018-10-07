import React, { Component } from "react";
import TagEntry from "./TagEntry";
import TextEditor from "./TextEditor";
import TagDisplay from "./TagDisplay";
import TrashButton from "./TrashButton";
import Trash from './Trash';

class CurrentNote extends Component {
  render() {
    return (
      <div>
        Hello from CurrentNote!!
        <TagEntry />
        <TagDisplay />
        <TrashButton />
        <TextEditor />
        <Trash />
      </div>
    );
  }
}

export default CurrentNote;
