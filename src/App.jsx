import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeTemplate } from "./templates/HomeTemplate/HomeTemplate";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Detail from "./pages/Detail/Detail";
import { DetailTemplate } from "./templates/DetailTemplate/DetailTemplate";
import { CheckoutTemplate } from "./templates/CheckoutTemplate/CheckoutTemplate";
import Checkout from "./pages/Checkout/Checkout";
import { UserTemplate } from "./templates/UserTemplate/UserTemplate";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import Films from "./pages/Admin/Films/Films";
import ShowTime from "./pages/Admin/Showtime/ShowTime";
import AddNew from "./pages/Admin/Films/AddNew/AddNew";
import Edit from "./pages/Admin/Films/Edit/Edit";
import Users from "./pages/Admin/Users/Users";
import AddUser from "./pages/Admin/Users/AddUser";
import EditUser from "./pages/Admin/Users/EditUser";
import { createBrowserHistory } from "history";
import { lazy } from "react";
export const userNavigation = createBrowserHistory();

const HomeLazy = lazy(() => {
    return import("./pages/Home/Home");
});

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route
                    path="/home"
                    element={<HomeTemplate Component={Home} />}
                />
                <Route
                    path="/news"
                    element={<HomeTemplate Component={News} />}
                />
                <Route
                    path="/login"
                    element={<UserTemplate Component={Login} />}
                />
                <Route
                    path="/register"
                    element={<UserTemplate Component={Register} />}
                />
                <Route
                    path="/detail/:id"
                    element={<DetailTemplate Component={Detail} />}
                />
                <Route
                    path="/checkout/:id"
                    element={<CheckoutTemplate Component={Checkout} />}
                /> */}
                {/* <Route path="/admin/*" element={<AdminTemplate />}>
                    <Route path="films" element={<Films />} />
                    <Route path="films/addnew" element={<AddNew />} />
                    <Route path="films/edit/:id" element={<Edit />} />
                    <Route
                        path="films/showtime/:id/:tenphim"
                        element={<ShowTime />}
                    />
                    <Route path="users" element={<Users />} />
                    <Route path="users/addnew" element={<AddUser />} />
                    <Route path="users/edit/:tk" element={<EditUser />} />
                </Route> */}
                {/* <Route path="/" element={<Home />} /> */}
                {/* //lazy -> khi nào xài thì download (khi component được xuất hiện ra màn hình) -> cải thien hiệu năng*/}

                <Route path="" element={<HomeTemplate />}>
                    <Route path="" element={<HomeLazy />}></Route>
                    <Route path="/news" element={<div>News page</div>}></Route>
                </Route>
                <Route path="/adminPage" element={<AdminTemplate />}>
                    <Route path="films" element={<Films />} />
                    <Route path="films/addnew" element={<AddNew />} />
                    <Route path="films/edit/:id" element={<Edit />} />
                    <Route
                        path="films/showtime/:id/:tenphim"
                        element={<ShowTime />}
                    />
                    <Route path="users" element={<Users />} />
                    <Route path="users/addnew" element={<AddUser />} />
                    <Route path="users/edit/:tk" element={<EditUser />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
