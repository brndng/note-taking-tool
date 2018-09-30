import React, { Component } from "react";
import NoteDrawer from "./NoteDrawer";

class SideBar extends Component {
  render() {
    return (
      <div>
        Hello from SideBar!! <NoteDrawer />
      </div>
    );
  }
}

export default SideBar;
