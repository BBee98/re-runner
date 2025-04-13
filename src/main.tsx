import {RouterProvider} from "react-router";
import {createRoot} from 'react-dom/client'
import './index.css'
import {Router} from "./pages/routes.tsx";

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={Router} />
)
