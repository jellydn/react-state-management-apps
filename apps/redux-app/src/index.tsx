import React from "react";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

export default function NextIndexWrapper() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
