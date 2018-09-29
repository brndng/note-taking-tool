import { combineReducers } from "redux";
import note from "./note";
import notes from "./notes";
import tag from "./tag";
import tags from "./tags";

export default combineReducers({
  note,
  notes,
  tag,
  tags
});
