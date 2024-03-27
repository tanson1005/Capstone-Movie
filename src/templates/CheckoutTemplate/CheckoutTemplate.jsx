import { Fragment, useEffect } from "react";
import { Route, useHistory } from 'react-router-dom';
import { USER_LOGIN } from "../../util/settings/config";

export const CheckoutTemplate = (props) => {
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const { Component, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    history.push("/login");
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
