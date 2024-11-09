import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import { useAuth } from "../contexts/auth";

const Routes = () => {
    const {token} = useAuth()
    console.log(token);

    const publicRoutes = [
        {
            path: "/service",
            element: <div>Service Page</div>
        },
        {
            path: "/about-us",
            element: <div>About Us</div>
        }
    ];

    const authRoutes = [
        {
            path: "/",
            element: <ProtectedRoute/>,
            children: [
                {
                    path: "/",
                    element: <div>User Home Page</div>
                },
                {
                    path: "/profile",
                    element: <div>User Profile</div>
                },
                {
                    path: "/logout",
                    element: <Logout/>
                }
            ]
        }
    ]

    const nonAuthRoutes = [
        {
            path: "/",
            element: <div>Home Page</div>
        },
        {
            path: "/login",
            element: <Login/>
        },
    ]

    const router = createBrowserRouter([
        ...publicRoutes,
        ...authRoutes,
        ...nonAuthRoutes
    ])

    return <RouterProvider router={router}/>;
}

export default Routes;
