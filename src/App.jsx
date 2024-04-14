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
                <Route path="" element={<HomeTemplate />}>
                    <Route path="" element={<HomeLazy />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/news" element={<News />}></Route>
                </Route>

                <Route path="/checkoutTemplate" element={<CheckoutTemplate/>}>
                <Route path="checkout" element={<Checkout/>}></Route>
                </Route>

                <Route path="/userTemplate" element={<UserTemplate/>}>
                    <Route path="login" element={<Login/>}></Route>
                    <Route path="register" element={<Register/>}></Route>
                </Route>

                <Route path="/detail" element={<Detail/>}>
                    <Route path="detailTemplate" element={<DetailTemplate/>}></Route>
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
