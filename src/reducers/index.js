import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import weatherReducer from "./weatherReducer";
import userReducer from "./userReducer";

export default combineReducers({
  form: formReducer,
  weather: weatherReducer,
  user: userReducer
});
