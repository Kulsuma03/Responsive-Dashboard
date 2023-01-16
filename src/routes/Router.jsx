import { createBrowserRouter } from "react-router-dom";
import Dashboard_Layout from "../layouts/Dashboard_Layout";
import Main from "../layouts/Main";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<Dashboard_Layout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    }
])