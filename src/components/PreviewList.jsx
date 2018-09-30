import React, { Component } from "react";
import Preview from "./Preview";
import AddButton from "./AddButton";
import Search from "./Search";

class PreviewList extends Component {
  render() {
    return (
      <div>
        Hello from PreviewList!!
        <div>
          <Search /> <AddButton />
        </div>
        <Preview />
      </div>
    );
  }
}

export default PreviewList;
