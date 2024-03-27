import { Fragment, useEffect } from "react";
import { Redirect, Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";

export const CheckoutTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { Component, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/login" />;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
