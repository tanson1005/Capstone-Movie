// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import { store } from "./redux/configStore";
// import * as signalR from "@aspnet/signalr";

// //antd
// // import "antd/dist/antd.css";

// //i18n đa ngôn ngữ
// import "./i18n";

// //reactslick
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { DOMAIN } from "./util/settings/config";

// //connet và lắng nghe từ phía sever

// // export const connection = new signalR.HubConnectionBuilder()
// //   .withUrl(`${DOMAIN}QuanLyDatVe`)
// //   .configureLogging(signalR.LogLevel.Information)
// //   .build();



// // connection
// //   .start()
// //   .then(() => {
// //     ReactDOM.render(
// //       <Provider store={store}>
// //         <App />
// //       </Provider>,
// //       document.getElementById("root")
// //     );
// //   })
// //   .catch((errors) => {
// //     console.log(errors);
// //   });

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//  <Provider store={store}>
//     <App />
//   </Provider>
// </React.StrictMode>,
// );