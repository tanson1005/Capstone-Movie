import { createBrowserRouter, Outlet } from "react-router-dom";

// ** code splitting

import { lazy } from "react";
// React.lazy
// React.useState

// import Home from "../pages/home/home";
// import Detail from "../pages/detail/detail";
const Home = lazy(() => import("../pages/Home/Home"));
const Detail = lazy(() => import("../pages/Detail/Detail")); // chưa xong

// ---
import { Carts } from "../pages/carts/carts";
import { Login } from "../pages/Login/Login";
import { Profile } from "../pages/profile/profile";
import { Register } from "../pages/Register/Register";
import { Search } from "../pages/search/search";
import { AdminTemplate } from "../templates/admin/admin.template";
import { UserTemplate } from "../templates/user/user.template";
import { ScrollToTop } from "@/components/scroll-to-top";

/**
 * Outlet: Giống với props.children
 * Outlet: Giúp thèn component cha render được component con
 *
 */

function Parent() {
    return (
        <>
            <Outlet />
        </>
    );
}

function Child1() {
    return <>Child1</>;
}

function Child2() {
    return <>Child2</>;
}

function Child3() {
    return <>Child3</>;
}

/**
 * react-router-dom: Khai báo path phải là đường dẫn relative
 *
 * - Đường dẫn absolute:
 *                      /test/a
 *                      /a
 *                      /b
 *                      /test/a/c
 * - Đường dẫn relative: không có dấu "/" phía trước đường dẫn.
 *                      test
 *                      a
 *                      b
 */
// ** Tương tự switch case.
export const router = createBrowserRouter([
    {
        path: "test", // "/test"
        element: <Parent />,
        children: [
            {
                path: "a", // ** "/test/a"
                /**
                 * <Parent>
                 *      <Child1 />
                 * </Parent>
                 *
                 */
                element: <Child1 />,
                children: [
                    {
                        path: "c", // ** "/test/a/c"

                        /**
                         * <Parent>
                         *      <Child1>
                         *             <Child3>
                         *      </Child1>
                         * </Parent>
                         */
                        element: <Child3 />,
                    },
                ],
            },
            {
                /**
                 * <Parent>
                 *      <Child2 />
                 * </Parent>
                 *
                 */
                path: "b", // ** "/test/b"
                element: <Child2 />,
            },
        ],
    },

    {
        element: <ScrollToTop />,
        children: [
            {
                element: <UserTemplate />,
                children: [
                    {
                        path: "",
                        // Lúc sử dụng chưa tải xong, nên sẽ bị lỗi
                        // khắc phục: Suspense
                        element: <Home />,
                    },
                    {
                        path: "detail/:productId",
                        // detail/3
                        // detail/2
                        // detail/1
                        // detail/10

                        // Chỉ truyền 1 tham số

                        // query-string dùng cho truyền nhiều tham số. ?q=men&id=10
                        // sử dụng trước khi được download về
                        element: <Detail />,
                    },
                    {
                        path: "carts",
                        element: <Carts />,
                        /**
                         * <UserTemplate>
                         *  <Suspense>
                         *      <Carts />
                         *  </Suspense>
                         * </UserTemplate>
                         */
                    },
                    {
                        path: "profile",
                        element: <Profile />,
                    },

                    {
                        path: "search",
                        element: <Search />,
                    },
                ],
            },

            {
                element: <AdminTemplate />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "register",
                        element: <Register />,
                    },
                ],
            },
        ],
    },

    {
        path: "*", // default
        element: <>Page not found.</>,
    },
]);
