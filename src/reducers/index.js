import { combineReducers } from "redux";
import notes from "./notes";
import id from "./note-id";
import tag from "./tag";

export default combineReducers({ notes, id, tag });
