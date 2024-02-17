import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer.js";
// npm install redux-devtools-extension --legacy-peer-deps
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) // Apply thunk middleware
);
// ekhane cailei middleware add kora jabe. middleware composeWithDevTools() ei fun er perameter hobe

export default store;
