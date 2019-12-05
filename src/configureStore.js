import { createStore, applyMiddleware, compose } from "redux";
import devTools from "remote-redux-devtools";
import thunk from "redux-thunk";
// import { persistStore } from "redux-persist";
import reducer from "./reducers";

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(thunk),
    devTools({
      name: "nativestarterkit",
      realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);
//   persistStore(store);

  return store;
}