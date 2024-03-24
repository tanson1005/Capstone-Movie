import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/templates/components/header/header";
import { Footer } from "src/templates/components/footer";
import { Menu } from "src/templates/components/menu";
import { useAppDispatch } from "@/redux/hook.ts";
import { getProfile } from "@/services";
import { setUser } from "@/redux/auth/auth.slice.ts";

export function UserTemplate() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        // 1.
        getProfile()
            .then((res) => {
                // Lưu vào redux
                dispatch(setUser(res.data.content));
            })
            .catch(console.log);
    }, []);

    return (
        <>
            <Header />
            <Menu />

            <main>
                <Suspense fallback="Loading...">
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </>
    );
}
