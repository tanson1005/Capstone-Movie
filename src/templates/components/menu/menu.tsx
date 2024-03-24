import { Link, NavLink, useLocation } from "react-router-dom";
import S from "./menu.module.css";

type NavLinkRenderProps = {
    isActive: boolean;
    isPending: boolean;
    isTransitioning: boolean;
};

/**
 * query-string: Truyền dữ liệu từ page này sang page khác.
 * reload trang mà vẫn giữ lại dữ liệu thì dùng query-string
 * bắt đầu bằng: ?
 * kết nối nhiều query lại với nhau: &
 */
export function Menu() {
    const { search } = useLocation();

    const activeNavLink = ({ isActive }: NavLinkRenderProps) => {
        return {
            fontWeight: isActive ? 700 : 400,
            textDecoration: isActive ? "underline" : "none",
        };
    };

    const activeQuery = (path: string) => {
        const isActive = search === path;

        return {
            fontWeight: isActive ? 700 : 400,
            textDecoration: isActive ? "underline" : "none",
        };
    };

    return (
        <div className={S["menu"]}>
            <NavLink style={activeNavLink} className={S["nav-link"]} to={"/"}>
                Home
            </NavLink>
            <NavLink
                style={() => activeQuery("?q=men&age=10")}
                className={S["nav-link"]}
                to={"/search?q=men&age=10"}
            >
                Men
            </NavLink>
            <NavLink
                style={() => activeQuery("?q=woman")}
                className={S["nav-link"]}
                to={"/search?q=woman"}
            >
                Woman
            </NavLink>
            <NavLink
                style={() => activeQuery("?q=kid")}
                className={S["nav-link"]}
                to={"/search?q=kid"}
            >
                Kid
            </NavLink>
            <NavLink
                style={() => activeQuery("?q=sport")}
                className={S["nav-link"]}
                to={"/search?q=sport"}
            >
                Sport
            </NavLink>
        </div>
    );
}
