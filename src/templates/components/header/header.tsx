import { Link } from "react-router-dom";
import S from "./header.module.css";

// ** Issue
// import { LogoIcon } from "../../../assets/icons/logo.icon";
// import { SearchIcon } from "../../../assets/icons/search.icon";
// ** Solution
// Đường dẫn: relative => absolute
import { LogoIcon, SearchIcon } from "@/assets/icons";

import { CiShoppingCart } from "react-icons/ci";
import { useAppDispatch, useAppSelector } from "@/redux/hook.ts";
import { setUser } from "@/redux/auth/auth.slice.ts";
import { removeLocalStorage } from "@/utils";
import { ACCESS_TOKEN } from "@/constants";

export function Header() {
    // Lấy từ redux xuống để kiểm tra xem thử người dùng đã login hay chưa
    const user = useAppSelector((state) => state.authReducer.user);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(setUser(null));
        // Xóa localStorage
        removeLocalStorage(ACCESS_TOKEN);

        // call api de logout
    };

    return (
        <header className={S.header}>
            <Link to={"/"}>
                <LogoIcon />
            </Link>

            <div className={S["header-nav"]}>
                <Link className={S["nav-link"]} to={"/home"}>

                    <span>Home</span>
                </Link>

                <Link className={S["nav-link"]} to={"/showing-movies"}>
                    <span>Showing Movies</span>
                </Link>

                <Link className={S["nav-link"]} to={"/coming-movie"}>
                    <span>Coming-Movie</span>
                </Link>

                {/* Nếu đăng nhập */}
                {user ? (
                    <>
                        <Link className={S["nav-link"]} to={"/profile"}>
                            Profile
                        </Link>
                        <button className={"text-white"} onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        {/* Chưa đăng nhập */}
                        <Link className={S["nav-link"]} to={"/login"}>
                            Sign In
                        </Link>
                        <Link className={S["nav-link"]} to={"/register"}>
                            Sign Out
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
}
