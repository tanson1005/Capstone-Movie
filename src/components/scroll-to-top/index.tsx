import { useScrollToTop } from "@/hooks";
import { Outlet } from "react-router-dom";

export function ScrollToTop() {
    useScrollToTop();

    return <Outlet />;
}
