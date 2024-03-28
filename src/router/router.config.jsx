import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => {return import('../pages/Home/Home')});
const Detail = lazy(() => import("../pages/Detail/Detail"));
const Carts = lazy(() => import("../pages/carts/carts"));
const Login = lazy(() => import("../pages/Login/Login"));
const Profile = lazy(() => import("../pages/profile/profile"));
const Register = lazy(() => import("../pages/Register/Register"));
const Search = lazy(() => import("../pages/search/search"));
const AdminTemplate = lazy(() => import("../templates/admin/admin.template"));
const UserTemplate = lazy(() => import("../templates/user/user.template"));
const ScrollToTop = lazy(() => import("@/components/scroll-to-top"));

function Parent() {
    return (
        <>
            <Routes>
                <Route path="" element={<Child1 />} />
                <Route path="b" element={<Child2 />} />
            </Routes>
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

export const router = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="test" element={<Parent />}>
                        <Route path="a" element={<Child1 />}>
                            <Route path="c" element={<Child3 />} />
                        </Route>
                        <Route path="b" element={<Child2 />} />
                    </Route>
                    <Route element={<ScrollToTop />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

function PageNotFound() {
    return <>Page not found.</>;
}
