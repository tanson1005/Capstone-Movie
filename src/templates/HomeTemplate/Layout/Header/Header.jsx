import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import {
  BarChartOutlined,
  DownOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { TOKEN, USER_LOGIN } from "../../../../util/settings/config";
import { OPEN_MODAL_USER } from "../../../../redux/actions/types/QuanLyNguoiDungType";

export default function Header() {
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);
  console.log(userLogin);
  const dispatch = useDispatch();
  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined />
        <button
          onClick={() => {
            dispatch({
              type: OPEN_MODAL_USER,
            });
          }}
        >
          Cá nhân
        </button>
      </Menu.Item>

      {userLogin.maLoaiNguoiDung === "QuanTri" ? (
        <Menu.Item>
          <NavLink
            to="/admin"
            className="flex items-center p-2 hover:text-yellow-400 text-white"
          >
            <BarChartOutlined />
            Quản Trị
          </NavLink>
        </Menu.Item>
      ) : (
        ""
      )}

      <Menu.Item>
        <LogoutOutlined />
        <button
          onClick={() => {
            localStorage.removeItem(USER_LOGIN);
            localStorage.removeItem(TOKEN);
            window.location.reload();
          }}
        >
          Đăng xuất
        </button>
      </Menu.Item>
    </Menu>
  );
  return (
    <header className="bg-opacity-40 bg-black text-lg text-white fixed w-full z-10">
      <div className=" flex justify-between items-center mx-10 h-14 ">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center "
        >
          <img src="./images/logo.png" style={{ width: 140 }} alt="logo" />
        </NavLink>

        <div className="">
          {_.isEmpty(userLogin) ? (
            <Fragment>
              <button
                className="font-bold self-center pr-10"
                onClick={() => {
                  history.push("/register");
                }}
              >
                Sign up
              </button>
              <button
                onClick={() => {
                  history.push("/login");
                }}
                className=" font-bold "
              >
                Sign in
              </button>
            </Fragment>
          ) : (
            <Dropdown overlay={menu}>
              <button
                className="ant-dropdown-link font-bold"
                onClick={(e) => e.preventDefault()}
              >
                Hello {userLogin.taiKhoan} <DownOutlined />
              </button>
            </Dropdown>
          )}
        </div>
      </div>
    </header>
  );
}
