import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import AppWrapper from "App";

// import AppRouter from "components/AppRouter";
import { setupStore } from "./store/store";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </Provider>
);

// ReactDOM.render(

//     <Provider store={store}>
//       <BrowserRouter>
//     <AppWrapper />
//    </BrowserRouter>
//     </Provider>,
//   document.getElementById("root")
// );
