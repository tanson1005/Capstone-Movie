import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";

export const HomeTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { Component, ...restProps } = props;

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />

            <Component {...propsRoute} />

            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
