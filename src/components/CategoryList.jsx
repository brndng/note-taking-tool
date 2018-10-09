import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";
import { getAllTags, isTrash } from "../helpers";

class CategoryList extends Component {
  render() {
    const { notes } = this.props;
    return (
      <div>
        <strong>CategoryList</strong>
        <ul>
          <Category tag={null}>All</Category>
          {getAllTags(notes).map(
            (tag, i) =>
              !isTrash(tag) && (
                <Category tag={tag} key={i}>
                  {tag}
                </Category>
              )
          )}
          <Category tag={"trash"}>Trash</Category>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(CategoryList);
