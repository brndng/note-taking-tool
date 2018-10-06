import { combineReducers } from "redux";
import id from "./note-id";
import notes from "./notes";
import tag from "./tag";
import tags from "./tags";

export default combineReducers({
  id,
  notes,
  tag,
  tags
});
