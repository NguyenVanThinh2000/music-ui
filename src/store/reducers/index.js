import { combineReducers } from "redux";
import searchReducer from "./search";
import songsReducer from "./songs";

const rootReducer = combineReducers({
    search: searchReducer,
    songs: songsReducer,
});

export default rootReducer;
