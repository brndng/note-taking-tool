import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "./Category";
import { getAllTags } from "../helpers";

class CategoryList extends Component {
  render() {
    const { notes } = this.props;
    return (
      <ul>
        {getAllTags(notes).map((tag, i) => (
          <Category tag={tag} key={tag}>
            {tag}
          </Category>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes };
};

export default connect(mapStateToProps)(CategoryList);
