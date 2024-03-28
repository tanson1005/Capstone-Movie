import { Fragment, useEffect } from "react";
import { Route } from "react-router-dom"; // Thay thế React Redux bằng react-router-dom
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { USER_LOGIN } from "../../util/settings/config";

export const CheckoutTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const navigate = useNavigate(); // Sử dụng useNavigate để thực hiện điều hướng

  const { Component, ...restProps } = props;

  if (!localStorage.getItem(USER_LOGIN)) {
    navigate("/login"); // Thực hiện điều hướng đến /login nếu không có thông tin đăng nhập
    return null; // Trả về null để không render component nếu đã thực hiện điều hướng
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
