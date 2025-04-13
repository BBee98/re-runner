import {createBrowserRouter,} from "react-router";
import App from "../App.tsx";

export const Router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
]);