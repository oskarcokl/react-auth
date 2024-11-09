import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Routes = () => {
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
            element: <div>Protected root</div>,
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
                    element: <div>Logout</div>
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
            element: <div>Login</div>
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
