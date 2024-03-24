import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";

// document.getElementById("root") as HTMLElement
// Giúp typescript biết chắc chắn là HTMLElement
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <App />,
);
