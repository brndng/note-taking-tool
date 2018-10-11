import React, { Component } from "react";
import CategoryList from "./CategoryList";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <CategoryList />
      </div>
    );
  }
}

export default SideBar;
