import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom"; // Thay đổi import này
import { TOKEN, USER_LOGIN } from "../../util/settings/config";
import { Layout, Menu, Breadcrumb, Dropdown } from "antd";
import {
  DownOutlined,
  MenuOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  UserAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import userNavigation from "../../App"; // Import userNavigation từ vị trí cụ thể

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const AdminTemplate = (props) => {
  const { Component, ...restProps } = props;
  const { userLogin } = useSelector((state) => state.QuanLyNguoiDungReducer);

  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN);
    userNavigation.push("/login"); // Sử dụng userNavigation thay vì useHistory
  };

  const handleGoToHome = () => {
    userNavigation.push("/"); // Sử dụng userNavigation thay vì useHistory
  };

  return (
    <Route
      {...restProps}
      render={(propsRoute) => (
        <Fragment>
          <Layout style={{ minHeight: "100vh" }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
              <div className="logo p-3 text-white text-xl text-center">
                <MenuOutlined />
              </div>
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <SubMenu key="sub1" icon={<UserOutlined />} title="Users">
                  <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                    <NavLink to="/admin/users">User List</NavLink>
                  </Menu.Item>
                  <Menu.Item key="2" icon={<UserAddOutlined />}>
                    <NavLink to="/admin/users/addnew">Add new</NavLink>
                  </Menu.Item>
                </SubMenu>

                <SubMenu
                  key="sub2"
                  icon={<VideoCameraOutlined />}
                  title="Films"
                >
                  <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                    <NavLink to="/admin/films">Film List</NavLink>
                  </Menu.Item>
                  <Menu.Item key="4" icon={<PlusOutlined />}>
                    <NavLink to="/admin/films/addnew">Add new</NavLink>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: 0 }}
              >
                <div className="text-right pr-10 pt-1">
                  {!_.isEmpty(userLogin) && (
                    <Dropdown
                      overlay={
                        <Menu>
                          <Menu.Item onClick={handleLogout}>Đăng xuất</Menu.Item>
                          <Menu.Item onClick={handleGoToHome}>Trang chủ</Menu.Item>
                        </Menu>
                      }
                    >
                      <button className="ant-dropdown-link text-white" onClick={(e) => e.preventDefault()}>
                        Hello {userLogin.taiKhoan} <DownOutlined />
                      </button>
                    </Dropdown>
                  )}
                </div>
              </Header>
              <Content style={{ margin: "0 16px" }}>
                <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: "85vh" }}
                >
                  <Component {...propsRoute} />
                </div>
              </Content>
            </Layout>
          </Layout>
        </Fragment>
      )}
    />
  );
};

export default AdminTemplate;
