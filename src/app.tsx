// ** Router
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.config.tsx";
// ** End - Router
// ** Redux
import { store } from "./redux/store.config.ts";
import { Provider } from "react-redux";
// ** End - Redux
import { GlobalStyle } from "./components/global-style/global-style.tsx";

export function App() {
    return (
        <GlobalStyle>
            <Provider store={store}>
                {/* ReactNode */}
                <RouterProvider router={router} />
            </Provider>
        </GlobalStyle>
    );
}
