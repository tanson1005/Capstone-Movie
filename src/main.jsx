import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";

// document.getElementById("root") as HTMLElement
// Giúp typescript biết chắc chắn là HTMLElement
ReactDOM.createRoot(document.getElementById("root")).render(
    <Fragment>
        <Provider store={store}>
        <App />
        </Provider>
    </Fragment>

);
