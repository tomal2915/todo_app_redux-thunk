import { createStore } from "redux";
import rootReducer from "./rootReducer.js";
// npm install redux-devtools-extension --legacy-peer-deps
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());
// ekhane cailei middleware add kora jabe. middleware composeWithDevTools() ei fun er perameter hobe

export default store;
