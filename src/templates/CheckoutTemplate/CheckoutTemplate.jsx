import { Fragment, Suspense } from "react";
import { Route, Outlet } from "react-router-dom"; // Import Route và Outlet
import { useNavigate } from "react-router-dom";
import { USER_LOGIN } from "../../util/settings/config";

export const CheckoutTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const { Component, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    navigate("/login");
    return null;
  }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => (
        <Fragment>
          <Component {...propsRoute} />
          <Suspense>
            <Outlet />
          </Suspense>
        </Fragment>
      )}
    />
  );
};
