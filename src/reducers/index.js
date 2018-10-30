import { combineReducers } from "redux";
import notes from "./notes";
import id from "./note-id";
import currentTag from "./current-tag";

export default combineReducers({ notes, id, currentTag });
