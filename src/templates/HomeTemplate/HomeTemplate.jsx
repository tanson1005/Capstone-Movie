import { Fragment, Suspense, useEffect } from "react";
import { Outlet, Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

// export const HomeTemplate = (props) => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   });
//   const { Component, ...restProps } = props;

//   return (
//     <Route
//       {...restProps}
//       render={(propsRoute) => {
//         return (
//           <div>
//             <Header {...propsRoute} />

//             <Component {...propsRoute} />

//             <Footer />
//           </div>
//         );
//       }}
//     />
//   );
// };

export const HomeTemplate = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const { Component, ...restProps } = props;

    return (
        <div>
            <Header />

            {/* <Component {...propsRoute} /> */}
            <Suspense>
              <Outlet></Outlet>
            </Suspense>
            <Footer />
        </div>
    );
};
