import { combineReducers } from "redux";
// import note from "./note";
import noteId from "./note-id";
import notes from "./notes";
import tag from "./tag";
import tags from "./tags";

export default combineReducers({
  noteId,
  notes,
  tag,
  tags
});
