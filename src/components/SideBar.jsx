import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Category from "./Category";

class SideBar extends Component {
  render() {
    return (
      <div className="side-bar">
        <Category tag={null}>All</Category>
        <CategoryList />
        <Category tag={"trash"}>Trash</Category>
      </div>
    );
  }
}

export default SideBar;
