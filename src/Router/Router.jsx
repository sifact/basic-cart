import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Cart from "../pages/Cart/Cart";
import Shop from "../pages/Shop/Shop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/",
                element: <Shop />,
            },
        ],
    },
]);
